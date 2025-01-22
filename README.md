# PORTFOLIO PROJECT OUTLINE

## Basic Idea

```mermaid
graph TD
A[User Visits Website] --> B[Initial Load]
B --> C[View Homepage]

    C --> D[Navigation Options]
    C --> E[Theme Toggle]

    D --> F[Info Modal]
    D --> G[Projects Modal]
    D --> H[Contact Modal]

    E --> I[Light Theme]
    E --> J[Dark Theme]

    F --> K[Close Modal]
    G --> K
    H --> K

    K --> C

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#dfd,stroke:#333,stroke-width:2px
```

## Features to be included

- **Homepage**: A central hub for navigation.

- **Theme Toggle:** Enhances user experience with light and dark theme options.

- **Modal Windows**: Provides additional information through separate sections:

- **Info Modal**

  - Name and Surname
  - Where I'm From
  - Technologies I can Use

- **Projects Modal**

  - Name of project
  - Screen Shot
  - Github Repository
  - Use Case scenario
  - Tech Used
    - Programming Languages: Python, JavaScript
    - Frameworks: Django, React
    - Libraries: Pandas, Axios
    - Tools: Git, Docker
    - Services: AWS, Firebase

- **Contact Modal**

  - Email
  - Github

- **Responsive** Design: Ensures smooth navigation and usability across devices.

- **Intuitive** User Flow: Designed for seamless interactions and clear navigation paths.
