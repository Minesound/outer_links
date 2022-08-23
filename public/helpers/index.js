document.addEventListener('DOMContentLoaded', () => {
  const $ = element => document.querySelector(element)
  const menuBar = $('.menu-bar')
  const nav = $('.nav')
  const bar = $('.bar')
  const close = $('.close')
  const body = $('body')

  menuBar.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    if (nav.classList.contains('nav-active')) {
      bar.style.display = 'none'
      close.style.display = 'block'
      body.style.overflow = 'hidden'
    } else {
      bar.style.display = 'block'
      close.style.display = 'none'
      body.style.overflow = 'scroll'
    }
  }
  )

  const anchors = document.querySelectorAll('nav>a')
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      nav.classList.remove('nav-active')
      bar.style.display = 'block'
      close.style.display = 'none'
      body.style.overflow = 'scroll'
    }
    )
  }
  )

  const sectionHome = $('#Inicio')
  const sectionPrograms = $('#Programas')
  const inicio = $('.Inicio')
  const programas = $('.Programas')

  const anchorActive = entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        if (entrada.target.id === 'Inicio') {
          inicio.classList.add('anchor-active')
        } else {
          inicio.classList.remove('anchor-active')
        }

        if (entrada.target.id === 'Programas') {
          programas.classList.add('anchor-active')
        } else {
          programas.classList.remove('anchor-active')
        }
      }
    })
  }

  const observador = new IntersectionObserver(anchorActive, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })

  observador.observe(sectionHome)
  observador.observe(sectionPrograms)

})
