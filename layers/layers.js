ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-155.266896, -67.077202, 73.927225, 99.489390]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.486000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Country_count_Other_1 = new ol.format.GeoJSON();
var features_Country_count_Other_1 = format_Country_count_Other_1.readFeatures(json_Country_count_Other_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Country_count_Other_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_count_Other_1.addFeatures(features_Country_count_Other_1);
var lyr_Country_count_Other_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Country_count_Other_1, 
                style: style_Country_count_Other_1,
                popuplayertitle: "Country_count_Other",
                interactive: false,
    title: 'Country_count_Other<br />\
    <img src="styles/legend/Country_count_Other_1_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Country_count_Other_1_1.png" /> 0 - 5<br />\
    <img src="styles/legend/Country_count_Other_1_2.png" /> 5 - 13<br />\
    <img src="styles/legend/Country_count_Other_1_3.png" /> 13 - 76<br />\
    <img src="styles/legend/Country_count_Other_1_4.png" /> 76 - 125<br />'
        });
var format_Country_count_Kidnnaping_2 = new ol.format.GeoJSON();
var features_Country_count_Kidnnaping_2 = format_Country_count_Kidnnaping_2.readFeatures(json_Country_count_Kidnnaping_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Country_count_Kidnnaping_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_count_Kidnnaping_2.addFeatures(features_Country_count_Kidnnaping_2);
var lyr_Country_count_Kidnnaping_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Country_count_Kidnnaping_2, 
                style: style_Country_count_Kidnnaping_2,
                popuplayertitle: "Country_count_Kidnnaping",
                interactive: false,
    title: 'Country_count_Kidnnaping<br />\
    <img src="styles/legend/Country_count_Kidnnaping_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Country_count_Kidnnaping_2_1.png" /> 1 - 6<br />\
    <img src="styles/legend/Country_count_Kidnnaping_2_2.png" /> 6 - 17<br />\
    <img src="styles/legend/Country_count_Kidnnaping_2_3.png" /> 17 - 32<br />\
    <img src="styles/legend/Country_count_Kidnnaping_2_4.png" /> 32 - 61<br />'
        });
var format_Country_count_Drugs_3 = new ol.format.GeoJSON();
var features_Country_count_Drugs_3 = format_Country_count_Drugs_3.readFeatures(json_Country_count_Drugs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Country_count_Drugs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_count_Drugs_3.addFeatures(features_Country_count_Drugs_3);
var lyr_Country_count_Drugs_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Country_count_Drugs_3, 
                style: style_Country_count_Drugs_3,
                popuplayertitle: "Country_count_Drugs",
                interactive: false,
    title: 'Country_count_Drugs<br />\
    <img src="styles/legend/Country_count_Drugs_3_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Country_count_Drugs_3_1.png" /> 1 - 6<br />\
    <img src="styles/legend/Country_count_Drugs_3_2.png" /> 6 - 24<br />\
    <img src="styles/legend/Country_count_Drugs_3_3.png" /> 24 - 96<br />\
    <img src="styles/legend/Country_count_Drugs_3_4.png" /> 96 - 138<br />'
        });
var format_Country_count_Killing_4 = new ol.format.GeoJSON();
var features_Country_count_Killing_4 = format_Country_count_Killing_4.readFeatures(json_Country_count_Killing_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Country_count_Killing_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Country_count_Killing_4.addFeatures(features_Country_count_Killing_4);
var lyr_Country_count_Killing_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Country_count_Killing_4, 
                style: style_Country_count_Killing_4,
                popuplayertitle: "Country_count_Killing",
                interactive: false,
    title: 'Country_count_Killing<br />\
    <img src="styles/legend/Country_count_Killing_4_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Country_count_Killing_4_1.png" /> 1 - 4<br />\
    <img src="styles/legend/Country_count_Killing_4_2.png" /> 4 - 24<br />\
    <img src="styles/legend/Country_count_Killing_4_3.png" /> 24 - 88<br />\
    <img src="styles/legend/Country_count_Killing_4_4.png" /> 88 - 218<br />'
        });
var format_Data_Pointpoints_Data_5 = new ol.format.GeoJSON();
var features_Data_Pointpoints_Data_5 = format_Data_Pointpoints_Data_5.readFeatures(json_Data_Pointpoints_Data_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Data_Pointpoints_Data_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Pointpoints_Data_5.addFeatures(features_Data_Pointpoints_Data_5);cluster_Data_Pointpoints_Data_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Data_Pointpoints_Data_5
});
var lyr_Data_Pointpoints_Data_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Data_Pointpoints_Data_5, 
                style: style_Data_Pointpoints_Data_5,
                popuplayertitle: "Data_Point — points_Data",
                interactive: true,
                title: '<img src="styles/legend/Data_Pointpoints_Data_5.png" /> Data_Point — points_Data'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Country_count_Other_1.setVisible(true);lyr_Country_count_Kidnnaping_2.setVisible(true);lyr_Country_count_Drugs_3.setVisible(true);lyr_Country_count_Killing_4.setVisible(true);lyr_Data_Pointpoints_Data_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Country_count_Other_1,lyr_Country_count_Kidnnaping_2,lyr_Country_count_Drugs_3,lyr_Country_count_Killing_4,lyr_Data_Pointpoints_Data_5];
lyr_Country_count_Other_1.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Points_Words_KILLING_sum': 'Points_Words_KILLING_sum', 'Points_Words_DRUGS_sum': 'Points_Words_DRUGS_sum', 'Points_Words_KIDNAPPING_sum': 'Points_Words_KIDNAPPING_sum', 'Points_Words_OTHER_sum': 'Points_Words_OTHER_sum', });
lyr_Country_count_Kidnnaping_2.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Points_Words_KILLING_sum': 'Points_Words_KILLING_sum', 'Points_Words_DRUGS_sum': 'Points_Words_DRUGS_sum', 'Points_Words_KIDNAPPING_sum': 'Points_Words_KIDNAPPING_sum', 'Points_Words_OTHER_sum': 'Points_Words_OTHER_sum', });
lyr_Country_count_Drugs_3.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Points_Words_KILLING_sum': 'Points_Words_KILLING_sum', 'Points_Words_DRUGS_sum': 'Points_Words_DRUGS_sum', 'Points_Words_KIDNAPPING_sum': 'Points_Words_KIDNAPPING_sum', 'Points_Words_OTHER_sum': 'Points_Words_OTHER_sum', });
lyr_Country_count_Killing_4.set('fieldAliases', {'fid': 'fid', 'COUNTRY': 'COUNTRY', 'ISO': 'ISO', 'COUNTRYAFF': 'COUNTRYAFF', 'AFF_ISO': 'AFF_ISO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Points_Words_KILLING_sum': 'Points_Words_KILLING_sum', 'Points_Words_DRUGS_sum': 'Points_Words_DRUGS_sum', 'Points_Words_KIDNAPPING_sum': 'Points_Words_KIDNAPPING_sum', 'Points_Words_OTHER_sum': 'Points_Words_OTHER_sum', });
lyr_Data_Pointpoints_Data_5.set('fieldAliases', {'fid': 'fid', 'word': 'word', 'country_predicted': 'country_predicted', 'file_name': 'file_name', 'admin1': 'admin1', 'lat': 'lat', 'lon': 'lon', 'country_code3': 'country_code3', 'geonameid': 'geonameid', 'place_name': 'place_name', 'feature_class': 'feature_class', 'feature_code': 'feature_code', 'admin_level': 'admin_level', 'tagscsv2_DATES': 'tagscsv2_DATES', 'tagscsv2_TAGS': 'tagscsv2_TAGS', 'Counting_words2_massacre': 'Counting_words2_massacre', 'Counting_words2_narcotics': 'Counting_words2_narcotics', 'Counting_words2_killed': 'Counting_words2_killed', 'Counting_words2_coca': 'Counting_words2_coca', 'Counting_words2_violations': 'Counting_words2_violations', 'Counting_words2_attacks': 'Counting_words2_attacks', 'Counting_words2_kidnapping': 'Counting_words2_kidnapping', 'Counting_words2_violence': 'Counting_words2_violence', 'Counting_words2_victims': 'Counting_words2_victims', 'Counting_words2_murdered': 'Counting_words2_murdered', 'Counting_words2_killing': 'Counting_words2_killing', 'Counting_words2_crimes': 'Counting_words2_crimes', 'Counting_words2_trafficking': 'Counting_words2_trafficking', 'Counting_words2_war': 'Counting_words2_war', 'Counting_words2_criminal': 'Counting_words2_criminal', 'Counting_words2_dead': 'Counting_words2_dead', 'Counting_words2_hostages': 'Counting_words2_hostages', 'Counting_words2_conflict': 'Counting_words2_conflict', 'Counting_words2_cocaine': 'Counting_words2_cocaine', 'Counting_words2_death': 'Counting_words2_death', 'Counting_words2_corruption': 'Counting_words2_corruption', 'Counting_words2_illegal': 'Counting_words2_illegal', 'Counting_words2_murders': 'Counting_words2_murders', 'Counting_words2_homicide': 'Counting_words2_homicide', 'Counting_words2_kidnapped': 'Counting_words2_kidnapped', 'Counting_words2_fighting': 'Counting_words2_fighting', 'Counting_words2_bomb': 'Counting_words2_bomb', 'Counting_words2_kidnapings': 'Counting_words2_kidnapings', 'Counting_words2_attackers': 'Counting_words2_attackers', 'Counting_words2_attacked': 'Counting_words2_attacked', 'Counting_words2_smugglers': 'Counting_words2_smugglers', 'Counting_words2_deaths': 'Counting_words2_deaths', 'Counting_words2_assassinated': 'Counting_words2_assassinated', 'Counting_words2_bombing': 'Counting_words2_bombing', 'Counting_words2_violation': 'Counting_words2_violation', 'Counting_words2_smuggling': 'Counting_words2_smuggling', 'Counting_words2_kidnap': 'Counting_words2_kidnap', 'Counting_words2_crime': 'Counting_words2_crime', 'Counting_words2_violent': 'Counting_words2_violent', 'Counting_words2_narcotrafficking': 'Counting_words2_narcotrafficking', 'Counting_words2_kidnappers': 'Counting_words2_kidnappers', 'Counting_words2_violated': 'Counting_words2_violated', 'Counting_words2_kidnapees': 'Counting_words2_kidnapees', 'Counting_words2_criminals': 'Counting_words2_criminals', 'Counting_words2_terrorism': 'Counting_words2_terrorism', 'Counting_words2_subversive': 'Counting_words2_subversive', 'Counting_words2_stolen': 'Counting_words2_stolen', 'Points_Words_KILLING': 'Points_Words_KILLING', 'Points_Words_DRUGS': 'Points_Words_DRUGS', 'Points_Words_KIDNAPPING': 'Points_Words_KIDNAPPING', 'Points_Words_OTHER': 'Points_Words_OTHER', });
lyr_Country_count_Other_1.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Points_Words_KILLING_sum': 'TextEdit', 'Points_Words_DRUGS_sum': 'TextEdit', 'Points_Words_KIDNAPPING_sum': 'TextEdit', 'Points_Words_OTHER_sum': 'TextEdit', });
lyr_Country_count_Kidnnaping_2.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Points_Words_KILLING_sum': 'TextEdit', 'Points_Words_DRUGS_sum': 'TextEdit', 'Points_Words_KIDNAPPING_sum': 'TextEdit', 'Points_Words_OTHER_sum': 'TextEdit', });
lyr_Country_count_Drugs_3.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Points_Words_KILLING_sum': 'TextEdit', 'Points_Words_DRUGS_sum': 'TextEdit', 'Points_Words_KIDNAPPING_sum': 'TextEdit', 'Points_Words_OTHER_sum': 'TextEdit', });
lyr_Country_count_Killing_4.set('fieldImages', {'fid': 'TextEdit', 'COUNTRY': 'TextEdit', 'ISO': 'TextEdit', 'COUNTRYAFF': 'TextEdit', 'AFF_ISO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Points_Words_KILLING_sum': 'TextEdit', 'Points_Words_DRUGS_sum': 'TextEdit', 'Points_Words_KIDNAPPING_sum': 'TextEdit', 'Points_Words_OTHER_sum': 'TextEdit', });
lyr_Data_Pointpoints_Data_5.set('fieldImages', {'fid': 'TextEdit', 'word': 'TextEdit', 'country_predicted': 'TextEdit', 'file_name': 'TextEdit', 'admin1': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'country_code3': 'TextEdit', 'geonameid': 'TextEdit', 'place_name': 'TextEdit', 'feature_class': 'TextEdit', 'feature_code': 'TextEdit', 'admin_level': 'Range', 'tagscsv2_DATES': 'TextEdit', 'tagscsv2_TAGS': 'TextEdit', 'Counting_words2_massacre': 'Range', 'Counting_words2_narcotics': 'Range', 'Counting_words2_killed': 'TextEdit', 'Counting_words2_coca': 'Range', 'Counting_words2_violations': 'Range', 'Counting_words2_attacks': 'Range', 'Counting_words2_kidnapping': 'Range', 'Counting_words2_violence': 'Range', 'Counting_words2_victims': 'Range', 'Counting_words2_murdered': 'Range', 'Counting_words2_killing': 'Range', 'Counting_words2_crimes': 'Range', 'Counting_words2_trafficking': 'Range', 'Counting_words2_war': 'Range', 'Counting_words2_criminal': 'Range', 'Counting_words2_dead': 'Range', 'Counting_words2_hostages': 'Range', 'Counting_words2_conflict': 'Range', 'Counting_words2_cocaine': 'Range', 'Counting_words2_death': 'Range', 'Counting_words2_corruption': 'Range', 'Counting_words2_illegal': 'Range', 'Counting_words2_murders': 'Range', 'Counting_words2_homicide': 'Range', 'Counting_words2_kidnapped': 'Range', 'Counting_words2_fighting': 'Range', 'Counting_words2_bomb': 'Range', 'Counting_words2_kidnapings': 'Range', 'Counting_words2_attackers': 'Range', 'Counting_words2_attacked': 'Range', 'Counting_words2_smugglers': 'Range', 'Counting_words2_deaths': 'Range', 'Counting_words2_assassinated': 'Range', 'Counting_words2_bombing': 'Range', 'Counting_words2_violation': 'Range', 'Counting_words2_smuggling': 'Range', 'Counting_words2_kidnap': 'Range', 'Counting_words2_crime': 'Range', 'Counting_words2_violent': 'CheckBox', 'Counting_words2_narcotrafficking': 'CheckBox', 'Counting_words2_kidnappers': 'CheckBox', 'Counting_words2_violated': 'Range', 'Counting_words2_kidnapees': 'Range', 'Counting_words2_criminals': 'CheckBox', 'Counting_words2_terrorism': 'Range', 'Counting_words2_subversive': 'Range', 'Counting_words2_stolen': 'Range', 'Points_Words_KILLING': 'Range', 'Points_Words_DRUGS': 'Range', 'Points_Words_KIDNAPPING': 'Range', 'Points_Words_OTHER': 'Range', });
lyr_Country_count_Other_1.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Points_Words_KILLING_sum': 'no label', 'Points_Words_DRUGS_sum': 'no label', 'Points_Words_KIDNAPPING_sum': 'no label', 'Points_Words_OTHER_sum': 'no label', });
lyr_Country_count_Kidnnaping_2.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Points_Words_KILLING_sum': 'no label', 'Points_Words_DRUGS_sum': 'no label', 'Points_Words_KIDNAPPING_sum': 'no label', 'Points_Words_OTHER_sum': 'no label', });
lyr_Country_count_Drugs_3.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Points_Words_KILLING_sum': 'no label', 'Points_Words_DRUGS_sum': 'no label', 'Points_Words_KIDNAPPING_sum': 'no label', 'Points_Words_OTHER_sum': 'no label', });
lyr_Country_count_Killing_4.set('fieldLabels', {'fid': 'no label', 'COUNTRY': 'no label', 'ISO': 'no label', 'COUNTRYAFF': 'no label', 'AFF_ISO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Points_Words_KILLING_sum': 'no label', 'Points_Words_DRUGS_sum': 'no label', 'Points_Words_KIDNAPPING_sum': 'no label', 'Points_Words_OTHER_sum': 'no label', });
lyr_Data_Pointpoints_Data_5.set('fieldLabels', {'fid': 'hidden field', 'word': 'inline label - always visible', 'country_predicted': 'inline label - always visible', 'file_name': 'inline label - always visible', 'admin1': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'country_code3': 'inline label - always visible', 'geonameid': 'hidden field', 'place_name': 'inline label - always visible', 'feature_class': 'hidden field', 'feature_code': 'hidden field', 'admin_level': 'inline label - always visible', 'tagscsv2_DATES': 'inline label - always visible', 'tagscsv2_TAGS': 'inline label - always visible', 'Counting_words2_massacre': 'hidden field', 'Counting_words2_narcotics': 'hidden field', 'Counting_words2_killed': 'hidden field', 'Counting_words2_coca': 'hidden field', 'Counting_words2_violations': 'hidden field', 'Counting_words2_attacks': 'hidden field', 'Counting_words2_kidnapping': 'hidden field', 'Counting_words2_violence': 'hidden field', 'Counting_words2_victims': 'hidden field', 'Counting_words2_murdered': 'hidden field', 'Counting_words2_killing': 'hidden field', 'Counting_words2_crimes': 'hidden field', 'Counting_words2_trafficking': 'hidden field', 'Counting_words2_war': 'hidden field', 'Counting_words2_criminal': 'hidden field', 'Counting_words2_dead': 'hidden field', 'Counting_words2_hostages': 'hidden field', 'Counting_words2_conflict': 'hidden field', 'Counting_words2_cocaine': 'hidden field', 'Counting_words2_death': 'hidden field', 'Counting_words2_corruption': 'hidden field', 'Counting_words2_illegal': 'hidden field', 'Counting_words2_murders': 'hidden field', 'Counting_words2_homicide': 'hidden field', 'Counting_words2_kidnapped': 'hidden field', 'Counting_words2_fighting': 'hidden field', 'Counting_words2_bomb': 'hidden field', 'Counting_words2_kidnapings': 'hidden field', 'Counting_words2_attackers': 'hidden field', 'Counting_words2_attacked': 'hidden field', 'Counting_words2_smugglers': 'hidden field', 'Counting_words2_deaths': 'hidden field', 'Counting_words2_assassinated': 'hidden field', 'Counting_words2_bombing': 'hidden field', 'Counting_words2_violation': 'hidden field', 'Counting_words2_smuggling': 'hidden field', 'Counting_words2_kidnap': 'hidden field', 'Counting_words2_crime': 'hidden field', 'Counting_words2_violent': 'hidden field', 'Counting_words2_narcotrafficking': 'hidden field', 'Counting_words2_kidnappers': 'hidden field', 'Counting_words2_violated': 'hidden field', 'Counting_words2_kidnapees': 'hidden field', 'Counting_words2_criminals': 'hidden field', 'Counting_words2_terrorism': 'hidden field', 'Counting_words2_subversive': 'hidden field', 'Counting_words2_stolen': 'hidden field', 'Points_Words_KILLING': 'hidden field', 'Points_Words_DRUGS': 'hidden field', 'Points_Words_KIDNAPPING': 'hidden field', 'Points_Words_OTHER': 'hidden field', });
lyr_Data_Pointpoints_Data_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});