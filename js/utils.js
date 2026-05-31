export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function validateDni(dni) {
  const dniRegex = /^\d{7,8}$/;
  return dniRegex.test(dni);
}

export function validatePhone(phone) {
  const phoneRegex = /^\d{10,15}$/;
  return phoneRegex.test(phone);
}

export function validateName(name) {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return nameRegex.test(name) && name.trim().length > 0;
}

export function validateBirthdate(birthdate) {
  if (!birthdate) return false;
  const selectedDate = new Date(birthdate + "T00:00:00");
  const hoy = new Date();
  hoy.setHours(23, 59, 59, 999);
  return selectedDate <= hoy;
}

export function isAdultAge(birthdate) {
  if (!birthdate) return false;
  const selectedDate = new Date(birthdate + "T00:00:00");
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 5);
  return selectedDate <= minDate;
}

export function isBusinessHours(dateString, timeString) {
  const date = new Date(dateString + "T00:00:00");
  const day = date.getUTCDay();
  const [hours, minutes] = timeString.split(":").map(Number);
  const timeInMinutes = hours * 60 + minutes;

  if (day === 0) return false;

  if (day >= 1 && day <= 5) {
    return timeInMinutes >= 8 * 60 && timeInMinutes <= 20 * 60;
  }

  if (day === 6) {
    return timeInMinutes >= 9 * 60 && timeInMinutes <= 13 * 60;
  }

  return false;
}

export function showAlert(title, text, icon) {
  if (window.Swal) {
    window.Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "#63a3a1"
    });
  } else {
    alert(`${title}: ${text}`);
  }
}

export function showLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "flex";
}

export function hideLoader() {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
}