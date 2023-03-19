# Email Helper
Displaying a list of popular email addresses.

### Using
Connecting CSS and JS files:

```HTML
<link rel="stylesheet" href="/email-helper.min.css"/>
<script src="/email-helper.min.js"></script> <!-- or ES5 - /email-helper-es5.min.js -->
```

After use the construction:

``` HTML
<div id="email" class="email-helper">
  <input type="mail" placeholder="Enter your email"/>
  <div class="email-helper__list"></div>
</div>
```

And call an instance of `new EmailHelper()` by passing arguments to **Selector** or **Element**, for example:

```JS
// /script.js
new EmailHelper('#email');
```

### Demo

[Demo](https://codepen.io/de-minov/embed/GRXBoMB?default-tab=result&theme-id=dark)