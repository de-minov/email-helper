class EmailHelper {
  dropClass = 'email-helper--dropped';
  reg = new RegExp('^(.+@)(.+)$', 'i');
  domains = [
    // mail.ru
    'mail.ru', 'internet.ru', 'bk.ru', 'inbox.ru', 'list.ru',
    // yandex
    'ya.ru', 'yandex.by', 'yandex.com', 'yandex.kz', 'yandex.ru',
    // rambler
    'autorambler.ru', 'lenta.ru', 'myrambler.ru', 'rambler.ru', 'rambler.ua', 'ro.ru',
    // google
    'gmail.com',
    // icloud
    'icloud.com',
    // outlook
    'outlook.com'
  ];
  
  constructor(el) {
    this.el = typeof el === 'string' ? document.querySelector(el) : el;
    if(!el) return false;
    
    this.input = this.el.querySelector('input');
    this.list = this.el.querySelector('.email-helper__list');
    if(!this.input || !this.list) return false;
    
    this.check();
    
    this.input.addEventListener('input', this.#handler.bind(this));
    this.list.addEventListener('click', ({target}) => {
      this.input.value = this.input.value.replace(this.reg, '$1'+target.textContent);
      this.input.dispatchEvent(new Event('input'));
    })
  }
  
  #handler(e) {
    if(!e.target) return false;
    const val = e.target.value;
    if(val || val.length > 0) this.check()
  }
  
  check() {
    const val = this.input.value;
    const match = val.match(this.reg);
    if(match) {
      const find = this.domains.filter(val => val.startsWith(match[2]));
      this.list.innerHTML = '';
      if(find.length === 1 && find[0] === match[2]) {
        this.listHide();
        return false;
      }
      find.map(val => this.list.insertAdjacentHTML('beforeend', `<div>${val}</div>`));
      this.listShow();
    } else this.listHide();
  }
  
  listShow() {
    this.el.classList.add(this.dropClass)
  }
  
  listHide() {
    if(this.el.classList.contains(this.dropClass)) this.el.classList.remove(this.dropClass)
  }
}