# QA ISSUES — Ronda 7
Fecha: 2026-08-07
Deploy verificado: https://alas-de-amor-portal.vercel.app (commit 500f993)
Resultado global: ❌ RECHAZADO (2 issues de rostros)

## Issues abiertos

### ISS-IMG-FACE-001 — Rostro de la coach no visible en Meditación Guiada
**Severidad:** Alta
**Ruta:** /servicios → Terapias → ServiceBlock "Meditación Guiada"
**Imagen:** `/imgs/services/terapias-meditacion.jpg` (copia de `gallery-1.jpg`)
**Descripción:** El PO reporta que en la imagen de Meditación Guiada no se ve el rostro de la coach (Liliana). La imagen está tomada de un ángulo donde la cara no es visible para el visitante.
**Estado:** 🔴 ABIERTO

### ISS-IMG-FACE-002 — Personas recortadas en Reiki
**Severidad:** Alta
**Ruta:** /servicios → Terapias → ServiceBlock "Reiki"
**Imagen:** `/imgs/services/terapias-reiki.jpg` (copia de WhatsApp therapy photo)
**Descripción:** El PO reporta que las personas en la imagen de Reiki están recortadas. El `object-fit: cover` o el encuadre original corta partes del cuerpo/rostro. La imagen tiene personas recortadas por los bordes.
**Estado:** 🔴 ABIERTO
