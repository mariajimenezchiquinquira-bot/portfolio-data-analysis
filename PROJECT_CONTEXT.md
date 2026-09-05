# Contexto del proyecto — Portafolio de María José Jiménez

Este archivo resume la estructura del proyecto y los cambios hechos con ayuda de Claude, para tener contexto rápido en futuras sesiones.

## Datos generales

- Proyecto: React + Vite (`data-portfolio-studio`)
- Ubicación: `C:\Users\alura\Downloads\Claude\PortfolioHTML\data-portfolio-studio`
- Repositorio: `github.com/mariajimenezchiquinquira-bot/data-portfolio-studio`, rama `main`
- Todo el contenido del portafolio vive en `src/routes/index.tsx`
- Las imágenes de los proyectos están en `src/assets/projects/`

## Flujo de deployment (confirmado)

El sitio en vivo (https://maria-jose-jimenez.vercel.app/) está desplegado en **Vercel**, y el proyecto de Vercel SÍ está conectado directamente al repositorio de GitHub (`mariajimenezchiquinquira-bot/data-portfolio-studio`, verificado en Vercel > Project Settings > Git > "Connected Git Repository").

Esto significa que el deployment es automático: no hace falta ningún paso adicional en Vercel ni ningún comando de despliegue manual. Basta con:

```
cd "C:\Users\alura\Downloads\Claude\PortfolioHTML\data-portfolio-studio"
git add -A
git commit -m "mensaje descriptivo"
git push origin main
```

Al hacer push a `main`, Vercel detecta el commit y publica el nuevo build solo, normalmente en uno o dos minutos. Si después de un push no se ven los cambios en el navegador, probablemente es caché del navegador — recargar con Ctrl+Shift+R (recarga forzada) antes de asumir que el deployment falló.

## Cambios realizados hasta ahora

### Customer Segmentation for Credit Card Clients
- El botón "Notebook" apunta a `public/notebook-segmentacion-clientes.html` (antes era un PDF alojado en Google Drive, luego un PDF local, y finalmente se cambió a un archivo HTML).
- El bloque "Solution" se renombró a "Approach".

### Zippto — Custom Flashcards
- Texto del bloque "Result" actualizado a: *"a custom UI, and intuitive study flows — demonstrating a complete product build from UI/UX design to deployment."*
- Imágenes `zippto-flashcard-front.png` y `zippto-flashcard-back.png` reemplazadas por capturas nuevas de la app (mismo nombre de archivo, contenido actualizado).

### Premium Tool Request Automation (Power Automate)
Imágenes usadas en `src/assets/projects/`:
- `formulario.png`
- `power-automate-flow.png`
- `power-automate-email-detail.png`
- `power-automate-email-confirmation.png`
- `power-automate-email-approved.png`

Layout de la galería (personalizado, no usa el componente `ProjectImageGrid` estándar):
- `power-automate-flow.png` grande, a la izquierda, ocupando 2 filas.
- A la derecha: `formulario.png` (fila 1) y `power-automate-email-detail.png` (fila 2).
- Fila 3: `power-automate-email-approved.png` (izquierda) y `power-automate-email-confirmation.png` (derecha).

### Botón LinkedIn (header)
- Antes tenía `href="#"`. Ahora apunta a `https://www.linkedin.com/in/mariajosejimenez-ingenieraindustrial/` con `target="_blank"`.
- El botón de LinkedIn del footer ya estaba correcto desde antes.

### Zippto — orden de imágenes en la segunda fila (sesión posterior)
- La galería usa el componente estándar `ProjectImageGrid` (grid de 2 columnas, en el orden del array `images`).
- Se intercambió el orden de las imágenes 3 y 4 del array para que en la segunda fila `zipptoBack` ("flashcard back side") quede a la izquierda y `zipptoFront` ("flashcard front side") quede a la derecha.

### Premium Tool Request Automation — imagen reemplazada (sesión posterior)
- Se reemplazó el contenido del archivo `src/assets/projects/power-automate-email-detail.png` por una captura nueva enviada por el usuario (mismo nombre de archivo, no hubo que tocar el código).

### Limpieza de archivos no usados
- En la misma sesión también se eliminaron del repo (ya no estaban en uso): `public/notebook-segmentacion-clientes.pdf`, `src/assets/projects/n8n-flow.png`, `src/assets/projects/n8n-information-extractor.png`.

### Customer Churn & Capital Loss Analysis — imagen más grande y reorden de skills (sesión posterior)
- La imagen del dashboard de Power BI en esta sección se agrandó (clase `max-w-xl` → `max-w-3xl` en `src/routes/index.tsx`).
- Se reordenó el array `SKILLS` en `src/routes/index.tsx` según el siguiente orden solicitado: Business Intelligence, Business Analysis, Data Analysis, Generative AI, Financial Analysis, Python, SQL, Power BI, N8N, Power Automate, Excel, Claude Code, Process Improvement, Automation, Digital Product Development, Agile Methodologies.
- Nota: durante el push de estos cambios se encontraron archivos de bloqueo de git colgados (`.git/index.lock`, `.git/HEAD.lock`, `.git/objects/maintenance.lock`), probablemente por tener otro programa (VS Code, GitHub Desktop, etc.) tocando el repo al mismo tiempo. Se eliminaron manualmente para poder completar el commit/push. Si vuelve a pasar, cerrar otros programas que usen el repo antes de correr git.

## Pendiente / notas de seguridad

- El remote de git (`git remote -v`) tiene un token de GitHub incrustado en la URL. Se recomienda rotarlo/reemplazarlo por seguridad cuando el usuario tenga oportunidad.
