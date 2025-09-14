# 📸 Galería Accesible

Este proyecto es una galería de imágenes construida con **HTML, CSS (Sass/Tailwind)** y **JavaScript**, siguiendo buenas prácticas de accesibilidad (WCAG 2.1 nivel A/AA).

---

## 🚀 Características
- Diseño responsive con **CSS Grid**.  
- Navegación con teclado (Tab, Shift+Tab, flechas).  
- Imágenes con `alt` descriptivos.  
- Controles accesibles con `aria-*` cuando es necesario.  
- Compatibilidad con `prefers-reduced-motion`.  

---

## 📂 Estructura del proyecto


---

## ✅ Checklist de Accesibilidad

### 1. Estructura semántica
- [ ] `lang` definido en `<html>`.  
- [ ] Uso de landmarks: `<header>`, `<main>`, `<footer>`.  
- [ ] Jerarquía correcta de títulos (`h1`, `h2`, `h3`).  

### 2. Texto alternativo en imágenes
- [ ] Todas las imágenes tienen `alt` descriptivo.  
- [ ] Imágenes decorativas con `alt=""`.  

### 3. Formularios y controles
- [ ] Inputs asociados con `label`.  
- [ ] Botones con texto visible o `aria-label`.  
- [ ] Estados como `aria-expanded` actualizados con JS.  

### 4. Navegación por teclado
- [ ] Navegación completa con **Tab / Shift+Tab / Enter / Space**.  
- [ ] Foco visible en todos los elementos interactivos.  

### 5. Colores y contraste
- [ ] Contraste mínimo **4.5:1** (texto normal) y **3:1** (texto grande).  
- [ ] Estados de foco con buen contraste.  

### 6. Roles y ARIA
- [ ] Uso de ARIA solo cuando es necesario.  
- [ ] Sincronización de `aria-*` con JS.  

### 7. Experiencia de usuario
- [ ] Contenido oculto accesible con `.sr-only`.  
- [ ] Animaciones respetan `prefers-reduced-motion`.  

---

## 🛠️ Tecnologías usadas
- HTML5 semántico  
- Sass / TailwindCSS  
- JavaScript (modular)  

---

## 📖 Recursos
- [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)  
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)  
- [Deque University](https://dequeuniversity.com/)  

---

## 📜 Licencia
Este proyecto está bajo la licencia MIT.  

