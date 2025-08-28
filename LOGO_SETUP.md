# 🎨 Configuración de Logos para SAMABOT

## 📁 Estructura de Archivos Requerida

Para que los logos funcionen correctamente, necesitas colocar las siguientes imágenes en la carpeta `public/logos/`:

```
public/
└── logos/
    ├── sama-automation-logo.png    # Logo de SAMA Automation
    ├── samabot-logo.png           # Logo de SAMABOT
    └── samabot-product.png        # Imagen del producto SAMABOT (opcional)
```

## 🚀 Cómo Subir las Imágenes

### Opción 1: Arrastrar y Soltar (Recomendado)
1. **Abre la carpeta** del proyecto en tu explorador de archivos
2. **Navega a** `public/logos/`
3. **Arrastra y suelta** los archivos de imagen ahí

### Opción 2: Comando de Terminal
```bash
# Desde la raíz del proyecto
cp /ruta/a/tu/imagen.png public/logos/nombre-del-archivo.png
```

## 🎯 Formatos Soportados

- **PNG** (recomendado para logos)
- **JPG/JPEG** (para fotos del producto)
- **SVG** (mejor para logos vectoriales)

## 🔧 Configuración Automática

Una vez que subas las imágenes:
1. **Los logos se cargarán automáticamente**
2. **Si fallan, se mostrarán placeholders elegantes**
3. **Vercel servirá las imágenes automáticamente**

## 📱 Tamaños Recomendados

- **Logo SAMA Automation:** 64x64px mínimo
- **Logo SAMABOT:** 128x128px mínimo  
- **Producto SAMABOT:** 400x300px mínimo

## ✅ Verificación

Después de subir las imágenes:
1. **Haz commit** de los cambios
2. **Push a GitHub**
3. **Vercel hará deploy automáticamente**
4. **Los logos aparecerán en la página**

---

## 🆘 Si las Imágenes No Aparecen

1. **Verifica la ruta:** `public/logos/nombre-exacto.png`
2. **Revisa el formato:** PNG, JPG o SVG
3. **Haz build local:** `npm run build`
4. **Verifica la consola** del navegador para errores

---

**¡Los logos harán que tu página se vea mucho más profesional!** 🎨✨
