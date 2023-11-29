<template>
    <div id="seccionCrearServicio" style="display: none;">
        <h2>Crear Servicio</h2>
        <label for="imagen">Imagen del Servicio:</label>
        <input type="text" id="imagen" placeholder="URL de la imagen">
    
        <label for="nombreServicio">Nombre del Servicio:</label>
        <input type="text" id="nombreServicio" maxlength="150">
    
        <label for="precioServicio">Precio del Servicio:</label>
        <input type="number" id="precioServicio" step="0.01">
    
        <label for="descripcionServicio">Descripción del Servicio (opcional):</label>
        <textarea id="descripcionServicio" maxlength="500"></textarea>
    
        <label for="categoriaServicio">Categoría:</label>
        <select id="categoriaServicio">
            <option value="Barbería">Barbería</option>
            <option value="Mascarilla">Mascarilla</option>
            <option value="Otros">Otros</option>
        </select>
    
        <label for="activoServicio">Activo:</label>
        <input type="checkbox" id="activoServicio">
    
        <button onclick="guardarServicio()">Guardar Servicio</button>
        <button onclick="cerrarFormulario()">Cancelar</button>
    </div>
    
    </template>