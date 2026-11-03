import './style.css'

document.querySelector('#year').textContent = new Date().getFullYear()

if (typeof window.IntersectionObserver === 'function') {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('is-pending')
    revealObserver.observe(element)
  })
}
