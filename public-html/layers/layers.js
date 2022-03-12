var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Poligono_de_Honduras_1 = new ol.format.GeoJSON();
var features_Poligono_de_Honduras_1 = format_Poligono_de_Honduras_1.readFeatures(json_Poligono_de_Honduras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligono_de_Honduras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligono_de_Honduras_1.addFeatures(features_Poligono_de_Honduras_1);
var lyr_Poligono_de_Honduras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poligono_de_Honduras_1, 
                style: style_Poligono_de_Honduras_1,
                interactive: true,
                title: '<img src="styles/legend/Poligono_de_Honduras_1.png" /> Poligono_de_Honduras'
            });
var format_deptos_sin_cortes_2 = new ol.format.GeoJSON();
var features_deptos_sin_cortes_2 = format_deptos_sin_cortes_2.readFeatures(json_deptos_sin_cortes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptos_sin_cortes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptos_sin_cortes_2.addFeatures(features_deptos_sin_cortes_2);
var lyr_deptos_sin_cortes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptos_sin_cortes_2, 
                style: style_deptos_sin_cortes_2,
                interactive: true,
                title: '<img src="styles/legend/deptos_sin_cortes_2.png" /> deptos_sin_cortes'
            });
var format_Cortes_3 = new ol.format.GeoJSON();
var features_Cortes_3 = format_Cortes_3.readFeatures(json_Cortes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cortes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cortes_3.addFeatures(features_Cortes_3);
var lyr_Cortes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cortes_3, 
                style: style_Cortes_3,
                interactive: true,
                title: '<img src="styles/legend/Cortes_3.png" /> Cortes'
            });
var format_Aldeas_Afectadas_Cortes_4 = new ol.format.GeoJSON();
var features_Aldeas_Afectadas_Cortes_4 = format_Aldeas_Afectadas_Cortes_4.readFeatures(json_Aldeas_Afectadas_Cortes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aldeas_Afectadas_Cortes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aldeas_Afectadas_Cortes_4.addFeatures(features_Aldeas_Afectadas_Cortes_4);
var lyr_Aldeas_Afectadas_Cortes_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aldeas_Afectadas_Cortes_4, 
                style: style_Aldeas_Afectadas_Cortes_4,
                interactive: true,
                title: '<img src="styles/legend/Aldeas_Afectadas_Cortes_4.png" /> Aldeas_Afectadas_Cortes'
            });
var format_Nombresaldeasafectadas_5 = new ol.format.GeoJSON();
var features_Nombresaldeasafectadas_5 = format_Nombresaldeasafectadas_5.readFeatures(json_Nombresaldeasafectadas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombresaldeasafectadas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nombresaldeasafectadas_5.addFeatures(features_Nombresaldeasafectadas_5);
var lyr_Nombresaldeasafectadas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nombresaldeasafectadas_5, 
                style: style_Nombresaldeasafectadas_5,
                interactive: true,
                title: '<img src="styles/legend/Nombresaldeasafectadas_5.png" /> Nombres aldeas afectadas'
            });
var format_Inundaciones_ETA_6_8Nov_dissolve_6 = new ol.format.GeoJSON();
var features_Inundaciones_ETA_6_8Nov_dissolve_6 = format_Inundaciones_ETA_6_8Nov_dissolve_6.readFeatures(json_Inundaciones_ETA_6_8Nov_dissolve_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundaciones_ETA_6_8Nov_dissolve_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundaciones_ETA_6_8Nov_dissolve_6.addFeatures(features_Inundaciones_ETA_6_8Nov_dissolve_6);
var lyr_Inundaciones_ETA_6_8Nov_dissolve_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inundaciones_ETA_6_8Nov_dissolve_6, 
                style: style_Inundaciones_ETA_6_8Nov_dissolve_6,
                interactive: true,
                title: '<img src="styles/legend/Inundaciones_ETA_6_8Nov_dissolve_6.png" /> Inundaciones_ETA_6_8Nov_dissolve'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Poligono_de_Honduras_1.setVisible(true);lyr_deptos_sin_cortes_2.setVisible(true);lyr_Cortes_3.setVisible(true);lyr_Aldeas_Afectadas_Cortes_4.setVisible(true);lyr_Nombresaldeasafectadas_5.setVisible(true);lyr_Inundaciones_ETA_6_8Nov_dissolve_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Poligono_de_Honduras_1,lyr_deptos_sin_cortes_2,lyr_Cortes_3,lyr_Aldeas_Afectadas_Cortes_4,lyr_Nombresaldeasafectadas_5,lyr_Inundaciones_ETA_6_8Nov_dissolve_6];
lyr_Poligono_de_Honduras_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODPAIS': 'CODPAIS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Nombre': 'Nombre', });
lyr_deptos_sin_cortes_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'COD': 'COD', 'DEPTO': 'DEPTO', 'Shape_Leng': 'Shape_Leng', 'DEP': 'DEP', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Cortes_3.set('fieldAliases', {'COD': 'COD', 'DEPTO': 'DEPTO', 'DEP': 'DEP', 'CODPAIS': 'CODPAIS', 'Km2': 'Km2', 'Densidad': 'Densidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Aldeas_Afectadas_Cortes_4.set('fieldAliases', {'geocodigo': 'geocodigo', 'nombre': 'nombre', 'km2': 'km2', 'densidad': 'densidad', 'fuente': 'fuente', 'oficializa': 'oficializa', });
lyr_Nombresaldeasafectadas_5.set('fieldAliases', {'geocodigo': 'geocodigo', 'nombre': 'nombre', 'km2': 'km2', 'densidad': 'densidad', 'fuente': 'fuente', 'oficializa': 'oficializa', });
lyr_Inundaciones_ETA_6_8Nov_dissolve_6.set('fieldAliases', {'code': 'code', });
lyr_Poligono_de_Honduras_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODPAIS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_deptos_sin_cortes_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'fid_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'COD': 'TextEdit', 'DEPTO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'DEP': 'TextEdit', 'CODPAIS': 'TextEdit', 'Km2': 'TextEdit', 'Densidad': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cortes_3.set('fieldImages', {'COD': 'TextEdit', 'DEPTO': 'TextEdit', 'DEP': 'TextEdit', 'CODPAIS': 'TextEdit', 'Km2': 'TextEdit', 'Densidad': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Aldeas_Afectadas_Cortes_4.set('fieldImages', {'geocodigo': 'TextEdit', 'nombre': 'TextEdit', 'km2': 'TextEdit', 'densidad': 'TextEdit', 'fuente': 'TextEdit', 'oficializa': 'TextEdit', });
lyr_Nombresaldeasafectadas_5.set('fieldImages', {'geocodigo': 'TextEdit', 'nombre': 'TextEdit', 'km2': 'TextEdit', 'densidad': 'TextEdit', 'fuente': 'TextEdit', 'oficializa': 'TextEdit', });
lyr_Inundaciones_ETA_6_8Nov_dissolve_6.set('fieldImages', {'code': 'Range', });
lyr_Poligono_de_Honduras_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODPAIS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Nombre': 'no label', });
lyr_deptos_sin_cortes_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'fid_1': 'no label', 'OBJECTID': 'no label', 'COD': 'no label', 'DEPTO': 'no label', 'Shape_Leng': 'no label', 'DEP': 'no label', 'CODPAIS': 'no label', 'Km2': 'no label', 'Densidad': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Cortes_3.set('fieldLabels', {'COD': 'no label', 'DEPTO': 'no label', 'DEP': 'no label', 'CODPAIS': 'no label', 'Km2': 'no label', 'Densidad': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Aldeas_Afectadas_Cortes_4.set('fieldLabels', {'geocodigo': 'no label', 'nombre': 'no label', 'km2': 'no label', 'densidad': 'no label', 'fuente': 'no label', 'oficializa': 'no label', });
lyr_Nombresaldeasafectadas_5.set('fieldLabels', {'geocodigo': 'no label', 'nombre': 'no label', 'km2': 'no label', 'densidad': 'no label', 'fuente': 'no label', 'oficializa': 'no label', });
lyr_Inundaciones_ETA_6_8Nov_dissolve_6.set('fieldLabels', {'code': 'no label', });
lyr_Inundaciones_ETA_6_8Nov_dissolve_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});