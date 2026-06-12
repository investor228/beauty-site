export type Locale = 'ru' | 'en'

export const translations = {
  ru: {
    nav: {
      services: 'Услуги',
      gallery: 'Галерея',
      booking: 'Запись',
      contacts: 'Контакты',
    },
    hero: {
      title: 'Ваша красота — наше искусство',
      subtitle: 'Премиальный салон красоты в центре города. Индивидуальный подход и безупречный сервис.',
      cta: 'Записаться на процедуру',
      services: 'Наши услуги',
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Широкий спектр профессиональных услуг для вашей красоты и ухоженности',
      from: 'от',
      currency: '₽',
      items: [
        { title: 'Стрижки и укладки', desc: 'Профессиональные мастера создадут идеальный образ для вас', price: '2500' },
        { title: 'Окрашивание', desc: 'Современные техники окрашивания премиум-красителями', price: '4500' },
        { title: 'Уход и SPA', desc: 'Восстановление и питание волос, массаж головы', price: '3000' },
        { title: 'Вечерние прически', desc: 'Элегантные укладки для особых мероприятий', price: '3500' },
      ],
    },
    gallery: {
      title: 'Наш салон',
      subtitle: 'Уютная атмосфера и современный дизайн для вашего комфорта',
    },
    booking: {
      title: 'Запись на процедуру',
      subtitle: 'Заполните форму, и мы свяжемся с вами в ближайшее время',
      name: 'Ваше имя',
      phone: 'Телефон',
      email: 'Email',
      comment: 'Комментарий',
      submit: 'Отправить заявку',
      success: 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.',
      error: 'Произошла ошибка. Попробуйте ещё раз.',
    },
    contacts: {
      title: 'Контакты',
      address: 'г. Москва, ул. Тверская, д. 15',
      phone: '+7 (495) 123-45-67',
      email: 'info@beautysalon.ru',
      hours: 'Пн-Вс: 10:00 - 21:00',
      addressLabel: 'Адрес',
      phoneLabel: 'Телефон',
      emailLabel: 'Email',
      hoursLabel: 'Режим работы',
    },
    footer: {
      copy: '© 2024 Beauty Salon. Все права защищены.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      booking: 'Book Now',
      contacts: 'Contacts',
    },
    hero: {
      title: 'Your Beauty — Our Art',
      subtitle: 'Premium beauty salon in the heart of the city. Individual approach and impeccable service.',
      cta: 'Book an Appointment',
      services: 'Our Services',
    },
    services: {
      title: 'Our Services',
      subtitle: 'A wide range of professional beauty and grooming services',
      from: 'from',
      currency: '₽',
      items: [
        { title: 'Haircuts & Styling', desc: 'Professional masters will create the perfect look for you', price: '2500' },
        { title: 'Hair Coloring', desc: 'Modern coloring techniques with premium dyes', price: '4500' },
        { title: 'Care & SPA', desc: 'Hair restoration and nourishment, scalp massage', price: '3000' },
        { title: 'Evening Hairstyles', desc: 'Elegant updos for special occasions', price: '3500' },
      ],
    },
    gallery: {
      title: 'Our Salon',
      subtitle: 'A cozy atmosphere and modern design for your comfort',
    },
    booking: {
      title: 'Book an Appointment',
      subtitle: 'Fill in the form and we will contact you shortly',
      name: 'Your Name',
      phone: 'Phone',
      email: 'Email',
      comment: 'Comment',
      submit: 'Send Request',
      success: 'Request sent! We will contact you shortly.',
      error: 'An error occurred. Please try again.',
    },
    contacts: {
      title: 'Contacts',
      address: 'Moscow, Tverskaya St. 15',
      phone: '+7 (495) 123-45-67',
      email: 'info@beautysalon.ru',
      hours: 'Mon-Sun: 10:00 - 21:00',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Working Hours',
    },
    footer: {
      copy: '© 2024 Beauty Salon. All rights reserved.',
    },
  },
}

export function getT(locale: Locale) {
  return translations[locale]
}
