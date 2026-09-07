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

## ⚠️ IMPORTANTE: hay 3 proyectos/portafolios distintos, no uno solo

Existen 3 carpetas/repositorios separados en `C:\Users\alura\Downloads\Claude\PortfolioHTML\`, cada uno con su propio sitio en Vercel:

| Carpeta | Repo GitHub | URL en vivo |
|---|---|---|
| `portfolio-product` | `data-portfolio-studio` | (portafolio "producto/completo", 5 proyectos) |
| `portfolio-bi` | `portfolio-bi` | https://portfolio-bi-iota.vercel.app/ |
| `portfolio-data-analysis` | `portfolio-data-analysis` | https://portfolio-data-analysis-silk.vercel.app/ |

**Antes de hacer un cambio hay que preguntar o confirmar en cuál(es) de los 3 aplica**, porque tienen contenido parecido pero no idéntico (por ejemplo, "Nu Split — Shared Payments Feature" solo existe en `portfolio-bi` y `portfolio-product`, no en `portfolio-data-analysis`). Si el usuario menciona una sección sin decir el sitio, buscar en los 3 antes de asumir cuál es. Un cambio pedido para "el portafolio" casi siempre debe aplicarse en los 3 si la sección existe en los 3, y avisar explícitamente en cuáles se aplicó.

## Convenciones sobre imágenes en las galerías de proyectos (`ProjectImageGrid`)

Componente en `src/components/portfolio/ImagePlaceholder.tsx`. Preferencia confirmada del usuario:

- **NO** usar un marco forzado tipo `aspect-[4/3]` con `object-contain` — eso recorta/reduce imágenes con proporciones distintas a 4:3 y dejaba espacio vacío alrededor (se notaba como "fondo gris" o "espacio en blanco" según el color de fondo del marco).
- **SÍ** usar el estilo de `portfolio-product` (la versión correcta, ya replicada en los 3 proyectos): el `<a>` contenedor SIN `aspect-*` fijo, y la imagen con `className="max-h-[420px] w-auto max-w-full object-contain ..."` — así cada imagen respeta su proporción natural y no queda espacio sobrante.
- El fondo de la tarjeta/marco de imagen debe ser blanco (`bg-white`), no gris (antes era `bg-card-foreground/[0.03]`, que se veía como un gris clarito indeseado).
- Cuando varias imágenes de una misma fila/sección deben verse "del mismo tamaño" entre sí (ej. las 6 gráficas de "Customer Segmentation"), la forma correcta es generar/exportar esas imágenes ya con las mismas dimensiones en píxeles (mismo ancho×alto) ANTES de subirlas — no forzar un marco CSS parejo, porque eso recorta o dejaba espacio vacío según la proporción de cada imagen.

## Sección "Customer Segmentation for Credit Card Clients" — origen de las imágenes

- Las 6 gráficas de esta sección (Elbow Method, Dominant Merchant Category, Average Transaction Amount, Most Used Card Franchise, Domestic vs. International Spending, Spending by Day of Week) se generan con matplotlib/seaborn desde el notebook de Jupyter `ConsumoTarjetasCredito.ipynb` (Google Colab), que lee el archivo `infoclientebanca_en.xlsx`. El usuario tiene ambos archivos y los puede volver a compartir si hace falta regenerar las gráficas.
- Las imágenes finales usadas en el sitio están en `src/assets/projects/` con nombres `segmentation-*.png` (ej. `segmentation-5-elbow-method.png`).
- El botón "Notebook" de esta sección apunta a un archivo HTML exportado del mismo notebook (`ConsumoTarjetasCredito.html` en `portfolio-bi`/`portfolio-data-analysis`, o `notebook-segmentacion-clientes.html` en `portfolio-product` — el nombre varía por proyecto).
- Para que las 6 gráficas del notebook no tuvieran fondo gris y quedaran del mismo tamaño, se les agregó `facecolor='white'` y se unificó `figsize=(6, 4)` en el código del notebook antes de re-ejecutarlo y volver a exportar tanto las imágenes PNG como el HTML.

## Flujo de deployment — aplica igual en los 3 proyectos

Mismo flujo que ya estaba documentado: `git add -A`, `git commit`, `git push origin main` desde la carpeta del proyecto correspondiente. Vercel despliega solo tras el push (1-2 min). Si el usuario no ve cambios, recordarle recargar con Ctrl+Shift+R antes de asumir que el deploy falló, y verificar en Vercel > Deployments que el commit correcto quedó en Production.

Nota técnica: al hacer `git commit`/`add` desde el bridge remoto a veces quedan archivos de lock (`.git/HEAD.lock`, `.git/index.lock`) que no se pueden borrar por permisos — si pasa, pedir permiso de borrado (`device_request_delete_permission`) sobre la carpeta `PortfolioHTML` y luego eliminar los `.lock` antes de reintentar el commit.
