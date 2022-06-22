# Vite + Typescript + Prettier + ESlint + Vitest

Welcome to my Vite template for React 😃. At the moment, I'm still improving the
template over time, adding a few more things that make it easier to develop 🚀.
<br>

## **Here is the list of technologies:**

- Prettier
- ESLint
- Axios
- Vitest (Vite's Super Testing Framework)
- Styled-Components

---

### **Prettier**

It will help you format your code as you develop. The default file that comes
with the template is to my liking, but you are free to change it to your
own.😎👍🏻

> If you have the Prettier extension installed. To get the prettier settings
> correct, create a folder at the root of your project called `.vscode` and
> create a `settings.json` file with the following configuration check:

```json
{
  "prettier.configPath": "./.prettierrc.js"
}
```

### **ESLint**

ESLint is your helper in your development 🤖. It will help you to avoid possible
bugs in your code. It has an integration with Prettier to avoid conflicting
styles, it will alert you about some things related to accessibility, better
ways of writing and etc... <br>

> If you want to add or disable any rules, feel free.

### **Axios**

It is an "improvement" of the browser's Fetch API. It brings more facilities for
you to handle HTTP requests and much more. I recommend reading the
[Documentation of Axios](https://axios-http.com/docs/intro).

### **Vitest**

This is the newest super testing tool created especially for vite !! She is
super fast and performant 😍 It builds on Chai's assertions, but is also Jest
compatible! 😎 (That is, if you know Jest, you don't need to learn another
testing framework. However, I strongly recommend reading the documentation which
is very rich)

[Documentation of Vitest](https://vitest.dev/) |
[Documentation of Testing Library](https://testing-library.com/docs/react-testing-library/intro).

### **Styled-Components**

A super popular style component creation library! ✨ Create your stylized
components easily with CSS in JS with amazing library

[Documentation of Styled-Components](https://styled-components.com/docs)

```bash
  git clone https://github.com/AugustoTI/template-vite-reactTS.git <project name>
  cd <project name>
  yarn
  yarn start
```

> don't forget to rename the project in `package.json` and remove the hidden
> `.git` folder from the project
