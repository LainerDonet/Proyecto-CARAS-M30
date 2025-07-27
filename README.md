# CARAS Landing Page – Refactorización con React y TypeScript

Este proyecto forma parte del **Módulo 30** del curso de Frontend de EBAC.  
El objetivo es **refactorizar la landing page existente** (HTML, CSS y JavaScript) convirtiéndola en una **aplicación modular en React con TypeScript** para mejorar la escalabilidad, el mantenimiento y la reutilización de componentes.

---

## Objetivos

- Migrar la landing page original a **React + TypeScript**.
- Organizar el código en **componentes reutilizables y modulares**.
- Tipar correctamente los datos y propiedades usando TypeScript.
- Estilizar los componentes con **Styled Components**.

---

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

---

## Estructura del Proyecto

La estructura sugerida para el proyecto es la siguiente:

```markdown
caras-landing/
├── src/
|-- assets/
|   |-- benefit1.png
|   |-- benefit2.png
|   |-- benefit3.png
|   |-- avatar1.png
|   |-- avatar2.png
|   |-- avatar3.png
|   |-- Logo 2.png
|-- components/
|   |-- Header/
|   |   |-- index.tsx
|   |   |-- styles.ts
|   |-- SubscriptionForm/
|   |   |-- index.tsx
|   |   |-- styles.ts
|   |-- FeaturedSection/
|   |   |-- index.tsx
|   |   |-- styles.ts
|   |-- Testimonials/
|   |   |-- index.tsx
|   |   |-- styles.ts
|   |-- Footer/
|   |   |-- index.tsx
|   |   |-- styles.ts
|-- styles/
|   |-- GlobalStyles.ts
|-- App.tsx
|-- index.tsx

````

---

## Pasos para crear el proyecto

1. **Crear la aplicación con Create React App y TypeScript**

   ```bash
   npx create-react-app caras-landing --template typescript
   cd caras-landing
   ```

2. **Instalar Styled Components y sus tipos**

   ```bash
   npm install styled-components
   npm install --save-dev @types/styled-components
   ```

3. **Organizar el proyecto** siguiendo la estructura mostrada anteriormente.

---

## Creación de Componentes

Dentro de la carpeta `src/components` se crean los siguientes componentes:

### 1. Header

* Contiene el logotipo de CARAS, el título y el subtítulo.

### 2. SubscriptionForm

* Contiene los campos de **nombre** y **correo electrónico** y el botón de envío.

### 3. FeaturedSection

* Presenta los beneficios de suscribirse y muestra imágenes atractivas.

### 4. Testimonials

* Muestra testimonios de suscriptores anteriores.

### 5. Footer

* Incluye enlaces a redes sociales y la información de contacto.

---

## Manejo de estado y tipado

* **Interfaces y tipos** se definen para props y estado.

* Ejemplo de definición de tipos:

  ```typescript
  interface Testimonial {
    name: string;
    comment: string;
  }

  interface SubscriptionFormProps {
    onSubmit: (name: string, email: string) => void;
  }
  ```

* Todos los componentes deben estar correctamente tipados.

---

## Estilos con Styled Components

Cada componente utilizará Styled Components para estilos:

```typescript
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;
```

---

## Ejecución del Proyecto

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:

   ```bash
   npm start
   ```

3. Construir versión de producción:

   ```bash
   npm run build
   ```

---
## Autor

**Nombre:** Lainer Felipe Donet Vasconcellos
```markdown
<span style="font-size: 14px; color: #666;">Proyecto desarrollado como parte del curso Frontend de EBAC – Módulo 30.</span>
```