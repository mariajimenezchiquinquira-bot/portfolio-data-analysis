# Data Portfolio Studio

Crea una página de portafolio profesional de una sola página (landing page), en inglés, para una estudiante de Ingeniería Industrial con énfasis en Business Intelligence, enfocada en roles de Data/BI/Producto en fintech. Debe verse limpia, moderna y profesional/corporativa (no informal, no exagerada). Diseño responsive, con una sola paleta de colores consistente en todo el sitio (usa tonos verde oscuro/verde azulado profesional + blanco/gris neutro, con un color de acento; evita colores saturados o infantiles).

Estructura de la página

1. Hero / Encabezado

Nombre: Maria José Jiménez

Título: Industrial Engineering Student — Business Intelligence

Subtítulo corto: "Building data-driven and AI-powered solutions, with a focus on fintech and digital products."

Botón/link a GitHub y a LinkedIn (dejar como placeholder de link "#" si no se especifica)

2. Sección "Projects" — 4 tarjetas de proyecto, mismo estilo visual entre sí

Tarjeta 1 Customer Segmentation for Credit Card Clients Python · SQL Problem: A bank wanted to understand what distinct consumption behaviors exist among its 47,871 credit card holders, in order to design targeted promotions — but no predefined customer groups were available. Solution: I applied K-means clustering (unsupervised learning) to segment clients based on consumption patterns, using one-hot encoding, feature scaling, and the elbow method to select the optimal number of clusters. I then used SQL to analyze each segment's dominant category, card brand, and spending behavior. Result: Identified 4 distinct customer segments, revealing that 91% of clients share a common national, in-store spending pattern, while a smaller international, online-shopping segment represents a differentiated promotional opportunity. GitHub button: "View on GitHub" → https://github.com/mariajimenezchiquinquira-bot/segmentacion-clientes-tarjetas-credito Esta tarjeta NO lleva imagen. En su lugar, agrega un botón adicional "View Notebook (PDF)" con un espacio placeholder para que yo suba el archivo PDF del notebook directamente en Lovable.

Tarjeta 2 Vehicle Contract Automation n8n · Google Drive API · Google Gemini (AI) · Google Sheets Problem: At a vehicle dealership, the billing team had to open each PDF contract and manually type 8 vehicle data fields (plate, brand, color, engine, etc.) into a spreadsheet — a repetitive, slow process prone to typing errors. Approach: I used n8n to connect each step of the process, with a Gemini AI model to read the contract text and extract the correct data. How it works (4 steps, mostrar como lista numerada breve):

Find contracts — the flow searches all PDF contracts stored in a cloud folder.

Process one by one — each contract is downloaded and automatically converted to text.

Extract data with AI — Gemini reads the text and returns the 8 organized vehicle fields.

Save to Google Sheets — each contract is logged as a new row, without duplicating rows if the flow runs again. Result: The flow processed all test contracts with no manual intervention, correctly logging them into Google Sheets and eliminating manual data entry for the billing team. Nota (agregar como texto pequeño/italic debajo de las imágenes): "Examples and images use synthetic documents with fictitious data and a sample company ('Prestige Motors'), created for demonstration purposes only." GitHub button: "View on GitHub" → https://github.com/mariajimenezchiquinquira-bot/n8n_Automatizacion_Lectura_Contratos Image gallery placeholder: deja espacio para 2 imágenes (con texto guía "Add project images here") que yo subiré: una del flujo de n8n ejecutado y otra del resultado en Google Sheets.

Tarjeta 3 Premium Tool Request Automation Power Automate Problem: Requesting premium tools like AI, design, or productivity software was a scattered process across emails and messages, with manual approvals and little traceability. Solution: I developed a Power Automate flow that centralizes and automates the entire process. Users submit requests through Microsoft Forms with details like tool, justification, cost, and license duration. The flow then routes the request for approval, notifies the requester of the outcome, and logs every decision automatically. Result: Turned a manual, scattered process into a structured, automated, and fully traceable workflow, reducing operational overhead and ensuring every request is properly documented. GitHub button: "View on GitHub" → https://github.com/mariajimenezchiquinquira-bot/Automatizacion_Solicitud_Herramientas_Premium Image gallery placeholder: deja espacio para 4 imágenes (con texto guía "Add project images here") que yo subiré: el flujo corriendo con checks verdes, y 3 correos del proceso (solicitud, aprobación, confirmación).

Tarjeta 4 Zippto — Simple, Customizable, Focus-Driven Flashcards HTML · CSS · JavaScript · Supabase · Vercel · Claude Code Problem: Traditional flashcard tools often have an unnecessarily steep learning curve — complex setups, unintuitive imports, and confusing review systems can make organizing material take longer than actually studying. Solution: I built Zippto, a multi-user web app where each person signs in with Google, creates their own collections, and customizes their flashcard format for anything they want to study. It uses a 3-deck spaced repetition system to focus study sessions on what needs the most practice, without complex setup. Result: A fully functional, deployed, multi-user web app accessible directly from the browser, with separate data per user — demonstrating a complete product build from UX to authentication, data storage, and deployment. Buttons: "Try Zippto" → https://zippto.vercel.app/landing.html | "View on GitHub" → https://github.com/mariajimenezchiquinquira-bot/Zippto Image gallery placeholder: deja espacio para 3-4 imágenes (con texto guía "Add project images here") que yo subiré: landing page, vista de colecciones, y las flashcards (anverso/reverso).

3. Sección "Skills" (opcional, breve, en formato de tags/pills, no como lista larga)

Business Intelligence · Business Analysis · Data Analysis · Generative AI · Financial Analysis · Python · SQL · Power BI · Excel · Claude Code

4. Footer

Copyright simple: "© 2026 Maria José Jiménez"

Links a GitHub / LinkedIn / email (placeholders "#")

Cada tarjeta debe tener sus botones de acción (GitHub y, cuando aplique, el link en vivo) alineados en la parte inferior, con el mismo estilo entre todas las tarjetas. Cada tarjeta debe incluir un espacio de imagen (placeholder) que yo reemplazaré después subiendo mis propias capturas de pantalla directamente en Lovable.

Notas de estilo

Usa tipografía limpia tipo sans-serif (Inter, Poppins o similar).

Tarjetas de proyecto con mismo padding, mismo estilo de subtítulos en negrita ("Problem", "Solution", "Result"), sin adornos innecesarios.

Nada de gráficos 3D ni elementos decorativos excesivos — prioriza claridad y legibilidad.

Mobile-friendly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6fe97889-23f1-43ba-9748-5f7861586009).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
