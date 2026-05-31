import { 
  validateEmail, 
  validateName, 
  validateDni, 
  validatePhone, 
  isAdultAge, 
  validateBirthdate, 
  showAlert, 
  showLoader, 
  hideLoader 
} from "./utils.js";
import { landingView, 
  loginView, 
  registerView, 
  bookingView, 
  doctorDashboardView, 
  adminDashboardView, 
  patientDashboardView, 
  doctorProfileView, 
  confirmationView 
} from "./views.js";

const app = document.getElementById("app");

let users = [];
let procedures = [];
let appointments = [];
let doctors = [];
let availableHours = [];
let currentUser = null;

const getStorage = (key) => JSON.parse(localStorage.getItem(key));
const setStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

async function loadData() {
  try {
    showLoader();
    const [u, p, a, d, h] = await Promise.all([
      fetch("data/users.json").then(r => r.json()),
      fetch("data/procedures.json").then(r => r.json()),
      fetch("data/appointments.json").then(r => r.json()),
      fetch("data/doctors.json").then(r => r.json()),
      fetch("data/hours.json").then(r => r.json())
    ]);

    users = getStorage("dentcare_users") || u;
    procedures = p;
    doctors = d;
    availableHours = h;
    appointments = getStorage("dentcare_appointments") || a;
    
    hideLoader();

    const savedSession = getStorage("dentcare_session");
    if (savedSession) {
      currentUser = savedSession;
      renderDashboard();
    } else {
      renderLanding();
    }
  } catch (error) {
    hideLoader();
    showAlert("Error", "No se pudieron cargar los datos", "error");
  }
}

function renderLanding() {
  app.innerHTML = landingView(procedures);
  document.getElementById("loginBtn")?.addEventListener("click", renderLogin);
  document.getElementById("heroBookBtn")?.addEventListener("click", () => {
    if (!currentUser) {
      showAlert("Atención", "Iniciá sesión para pedir un turno", "warning");
      renderLogin();
    } else {
      renderBooking();
    }
  });
}

function renderLogin() {
  app.innerHTML = loginView();
  document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPass").value;
    
    if (!validateEmail(email)) {
      return showAlert("Formato Incorrecto", "Por favor, introduce un correo electrónico válido.", "error");
    }
    
    const userFound = users.find(u => u.email === email && u.password === password);
    if (!userFound) return showAlert("Error", "Credenciales incorrectas", "error");
    
    currentUser = userFound;
    setStorage("dentcare_session", currentUser);
    renderDashboard();
  });
  document.getElementById("toRegisterBtn")?.addEventListener("click", renderRegister);
}

function renderRegister() {
  app.innerHTML = registerView();
  document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const lastName = document.getElementById("regLastName").value.trim();
    const birth = document.getElementById("regBirth").value;
    const dni = document.getElementById("regDni").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPass").value;

    if (!validateName(name) || !validateName(lastName)) {
      return showAlert("Error", "Nombre o apellido inválidos (solo letras).", "error");
    }
    if (!validateDni(dni)) {
      return showAlert("Error", "El DNI debe tener 7 u 8 dígitos.", "error");
    }
    if (!validatePhone(phone)) {
      return showAlert("Error", "Celular inválido (10-15 dígitos).", "error");
    }
    if (!validateEmail(email)) {
      return showAlert("Error", "Email inválido.", "error");
    }
    if (!isAdultAge(birth)) {
      return showAlert("Error", "Fecha de nacimiento inválida o menor de 5 años.", "error");
    }
    if (password.length < 4) {
      return showAlert("Seguridad", "La contraseña debe tener al menos 4 caracteres.", "error");
    }
    const newPatient = {
      id: Date.now(),
      name,
      lastName,
      birth,
      dni,
      phone,
      email,
      password,
      role: "patient"
    };
    
    users.push(newPatient);
    setStorage("dentcare_users", users);
    
    showAlert("Éxito", "Cuenta creada correctamente.", "success");
    renderLogin();
  });
  
  document.getElementById("toLoginBtn")?.addEventListener("click", renderLogin);
}
function renderDashboard() {
  if (currentUser.role === "admin") {
    renderAdminPanel();
  } else if (currentUser.role === "doctor") {
    renderDoctorPanel();
  } else {
    renderPatientPanel();
  }
}

function renderPatientPanel() {
  app.innerHTML = patientDashboardView(currentUser, appointments);
  document.getElementById("logoutBtn")?.addEventListener("click", logout);
  document.getElementById("goToBookingBtn")?.addEventListener("click", renderBooking);
  
  document.querySelectorAll('.cancel-appt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const apptId = Number(e.currentTarget.dataset.id);
      appointments = appointments.filter(a => a.id !== apptId);
      setStorage("dentcare_appointments", appointments);
      showAlert("Cancelado", "El turno fue cancelado correctamente", "success");
      renderPatientPanel();
    });
  });
}

function renderAdminPanel() {
  app.innerHTML = adminDashboardView(users, doctors, appointments, procedures);

  document.getElementById("logoutBtn")?.addEventListener("click", logout);

  app.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-profile-btn")) {
      const docId = e.target.dataset.id;
      const doctorFound = doctors.find(d => d.id === docId);

      if (doctorFound) {
        const doctorAppts = appointments.filter(a => a.doctor === doctorFound.name);
        
        app.innerHTML = doctorProfileView(doctorFound, procedures, doctorAppts);
        
        document.getElementById("backToDashboardBtn")?.addEventListener("click", renderAdminPanel);
      }
    }
  });
}

function renderDoctorPanel() {
  app.innerHTML = doctorDashboardView(currentUser, appointments);
  document.getElementById("logoutBtn")?.addEventListener("click", logout);
  
  document.querySelectorAll('.confirm-appt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => updateApptStatus(e.currentTarget.dataset.id, "Confirmado"));
  });
  
  document.querySelectorAll('.finish-appt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => updateApptStatus(e.currentTarget.dataset.id, "Finalizado"));
  });
}

function updateApptStatus(id, newStatus) {
  const appt = appointments.find(a => a.id === Number(id));
  if (appt) {
    appt.status = newStatus;
    setStorage("dentcare_appointments", appointments);
    renderDoctorPanel();
  }
}

function renderBooking() {
  app.innerHTML = bookingView(procedures, doctors);
  
  const procedureSelect = document.getElementById("bookProcedure");
  const doctorSelect = document.getElementById("bookDoctor");
  const dateInput = document.getElementById("bookDate");
  const timeSelect = document.getElementById("bookTime");

  procedureSelect?.addEventListener("change", () => {
    const selectedValue = procedureSelect.value;
    const procedure = procedures.find(p => p.specialty === selectedValue || p.name === selectedValue);
    
    if (procedure && doctorSelect) {
      const assignedDoctor = doctors.find(d => d.id === procedure.doctorId);
      if (assignedDoctor) {
        doctorSelect.innerHTML = `<option value="${assignedDoctor.name}" selected>${assignedDoctor.name}</option>`;
      } else {
        doctorSelect.innerHTML = '<option value="">Profesional no asignado</option>';
      }
    }
    
    if (timeSelect) timeSelect.innerHTML = '<option value="">Seleccionar horario</option>';
    updateHours();
  });

  const updateHours = () => {
    if (!dateInput?.value || !doctorSelect?.value || doctorSelect.value === "") return;
    
    const takenHours = appointments
      .filter(a => a.doctor === doctorSelect.value && a.date === dateInput.value && a.status !== "Cancelado")
      .map(a => a.time);
      
    const freeHours = availableHours.filter(h => !takenHours.includes(h));
    
    if (timeSelect) {
      timeSelect.innerHTML = '<option value="">Seleccionar horario</option>' + 
        freeHours.map(h => `<option value="${h}">${h}</option>`).join('');
    }
  };

  dateInput?.addEventListener("change", updateHours);
  document.getElementById("cancelBookingBtn")?.addEventListener("click", renderDashboard);

  document.getElementById("bookingForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!procedureSelect.value || !doctorSelect.value || !dateInput.value || !timeSelect.value) {
      return showAlert("Error", "Por favor completa todos los campos", "error");
    }

    const newAppt = {
      id: Date.now(),
      patientName: currentUser.name,
      userEmail: currentUser.email,
      procedure: procedureSelect.value,
      doctor: doctorSelect.value,
      date: dateInput.value,
      time: timeSelect.value,
      status: "Pendiente"
    };
    
    appointments.push(newAppt);
    setStorage("dentcare_appointments", appointments);
    renderConfirmationPage(newAppt);
  });
}

function renderConfirmationPage(appt) {
  app.innerHTML = confirmationView(appt);

  document.getElementById("finishBookingBtn")?.addEventListener("click", renderDashboard);

  document.getElementById("modifyBookingBtn")?.addEventListener("click", () => {
    appointments = appointments.filter(a => a.id !== appt.id);
    setStorage("dentcare_appointments", appointments);
    renderBooking();
    
    setTimeout(() => {
      const procedureSelect = document.getElementById("bookProcedure");
      const dateInput = document.getElementById("bookDate");
      
      if (procedureSelect) {
        procedureSelect.value = appt.procedure;
        procedureSelect.dispatchEvent(new Event('change'));
      }
      if (dateInput) {
        dateInput.value = appt.date;
        dateInput.dispatchEvent(new Event('change'));
      }
    }, 50);
  });

  document.getElementById("cancelBookingBtn")?.addEventListener("click", () => {
    appointments = appointments.filter(a => a.id !== appt.id);
    setStorage("dentcare_appointments", appointments);
    showAlert("Cancelado", "El turno fue cancelado correctamente", "success");
    renderDashboard();
  });
}

function logout() {
  currentUser = null;
  localStorage.removeItem("dentcare_session");
  renderLanding();
}

loadData();