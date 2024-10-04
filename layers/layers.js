var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_POLARUANGRTRWP_2 = new ol.format.GeoJSON();
var features_POLARUANGRTRWP_2 = format_POLARUANGRTRWP_2.readFeatures(json_POLARUANGRTRWP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRTRWP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRTRWP_2.addFeatures(features_POLARUANGRTRWP_2);
var lyr_POLARUANGRTRWP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLARUANGRTRWP_2, 
                style: style_POLARUANGRTRWP_2,
                popuplayertitle: "POLARUANG RTRWP",
                interactive: true,
    title: 'POLARUANG RTRWP<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_1.png" /> Kawasan Hutan Adat<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_2.png" /> Kawasan Hutan Produksi<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_3.png" /> Kawasan Konservasi<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_4.png" /> Kawasan Permukiman<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_5.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_6.png" /> Kawasan Pertanian<br />\
    <img src="styles/legend/POLARUANGRTRWP_2_7.png" /> Kawasan yang Memberikan Perlindungan terhadap Kawasan Bawahannya<br />'
        });
var format_POLARUANGRDTR2019_3 = new ol.format.GeoJSON();
var features_POLARUANGRDTR2019_3 = format_POLARUANGRDTR2019_3.readFeatures(json_POLARUANGRDTR2019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRDTR2019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRDTR2019_3.addFeatures(features_POLARUANGRDTR2019_3);
var lyr_POLARUANGRDTR2019_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLARUANGRDTR2019_3, 
                style: style_POLARUANGRDTR2019_3,
                popuplayertitle: "POLA RUANG RDTR 2019",
                interactive: true,
    title: 'POLA RUANG RDTR 2019<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_1.png" /> Hutan Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_2.png" /> Jalan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_3.png" /> Pemakaman<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_4.png" /> Perdagangan & Jasa Skala BWP<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_5.png" /> Perdagangan & Jasa Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_6.png" /> Perdagangan & Jasa Skala Sub-BWP<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_7.png" /> Perkebunan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_8.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_9.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_10.png" /> RTH Lainnya<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_11.png" /> Sentra Industri Kecil dan Menengah<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_12.png" /> SPU Kesehatan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_13.png" /> SPU Kesehatan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_14.png" /> SPU Olahraga Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_15.png" /> SPU Pendidikan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_16.png" /> SPU Pendidikan Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_17.png" /> SPU Pendidikan Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_18.png" /> SPU Pendidikan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_19.png" /> SPU Peribadatan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_20.png" /> SPU Peribadatan Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_21.png" /> SPU Peribadatan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_22.png" /> SPU Sosial Budaya Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_23.png" /> SPU Transportasi Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_24.png" /> Sungai<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_25.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_26.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_27.png" /> Taman Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_28.png" /> Zona Pariwisata<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_29.png" /> Zona Perkantoran<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_30.png" /> Zona Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_31.png" /> Zona Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_32.png" /> Zona Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_33.png" /> Zona Sekitar Danau atau Waduk<br />\
    <img src="styles/legend/POLARUANGRDTR2019_3_34.png" /> Zona Sempadan Sungai<br />'
        });
var lyr_WILAYAHKETINGGIAN_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "WILAYAH KETINGGIAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WILAYAHKETINGGIAN_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12226412.734333, 134755.377770, 12250251.969210, 153089.773643]
                            })
                        });
var lyr_Slope_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12226412.734333, 134755.377771, 12250251.969210, 153089.773643]
                            })
                        });
var format_CAT_6 = new ol.format.GeoJSON();
var features_CAT_6 = format_CAT_6.readFeatures(json_CAT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAT_6.addFeatures(features_CAT_6);
var lyr_CAT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAT_6, 
                style: style_CAT_6,
                popuplayertitle: "CAT",
                interactive: true,
                title: '<img src="styles/legend/CAT_6.png" /> CAT'
            });
var format_CurahHujanTahunan_7 = new ol.format.GeoJSON();
var features_CurahHujanTahunan_7 = format_CurahHujanTahunan_7.readFeatures(json_CurahHujanTahunan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurahHujanTahunan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanTahunan_7.addFeatures(features_CurahHujanTahunan_7);
var lyr_CurahHujanTahunan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanTahunan_7, 
                style: style_CurahHujanTahunan_7,
                popuplayertitle: "Curah Hujan Tahunan",
                interactive: true,
    title: 'Curah Hujan Tahunan<br />\
    <img src="styles/legend/CurahHujanTahunan_7_0.png" /> 2000-3000 mm/tahun<br />\
    <img src="styles/legend/CurahHujanTahunan_7_1.png" /> 3000-4000 mm/tahun<br />\
    <img src="styles/legend/CurahHujanTahunan_7_2.png" /> 4000-5000 mm/tahun<br />'
        });
var format_DAS_8 = new ol.format.GeoJSON();
var features_DAS_8 = format_DAS_8.readFeatures(json_DAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_8.addFeatures(features_DAS_8);
var lyr_DAS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAS_8, 
                style: style_DAS_8,
                popuplayertitle: "DAS",
                interactive: true,
                title: '<img src="styles/legend/DAS_8.png" /> DAS'
            });
var format_Litologi_9 = new ol.format.GeoJSON();
var features_Litologi_9 = format_Litologi_9.readFeatures(json_Litologi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologi_9.addFeatures(features_Litologi_9);
var lyr_Litologi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Litologi_9, 
                style: style_Litologi_9,
                popuplayertitle: "Litologi",
                interactive: true,
    title: 'Litologi<br />\
    <img src="styles/legend/Litologi_9_0.png" /> Batuan Gunungapi Niut<br />\
    <img src="styles/legend/Litologi_9_1.png" /> Batuan Gunungapi Raya<br />\
    <img src="styles/legend/Litologi_9_2.png" /> Batuan Gunungapi Serantak<br />\
    <img src="styles/legend/Litologi_9_3.png" /> Batupasir Kayan<br />\
    <img src="styles/legend/Litologi_9_4.png" /> Dasit Bawang<br />\
    <img src="styles/legend/Litologi_9_5.png" /> Endapan aluvium<br />\
    <img src="styles/legend/Litologi_9_6.png" /> Endapan Aluvium<br />\
    <img src="styles/legend/Litologi_9_7.png" /> Endapan Talus<br />\
    <img src="styles/legend/Litologi_9_8.png" /> Formasi Hamisan<br />\
    <img src="styles/legend/Litologi_9_9.png" /> Formasi Pendawan<br />\
    <img src="styles/legend/Litologi_9_10.png" /> Formasi Seminis<br />\
    <img src="styles/legend/Litologi_9_11.png" /> Granodiorit Jagoi<br />\
    <img src="styles/legend/Litologi_9_12.png" /> Granodiorit Mensibau<br />\
    <img src="styles/legend/Litologi_9_13.png" /> Intrusi Sintang<br />\
    <img src="styles/legend/Litologi_9_14.png" /> Kelompok Bengkayang<br />\
    <img src="styles/legend/Litologi_9_15.png" /> Komplek Serabang<br />'
        });
var format_Geomorfologi_10 = new ol.format.GeoJSON();
var features_Geomorfologi_10 = format_Geomorfologi_10.readFeatures(json_Geomorfologi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorfologi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorfologi_10.addFeatures(features_Geomorfologi_10);
var lyr_Geomorfologi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorfologi_10, 
                style: style_Geomorfologi_10,
                popuplayertitle: "Geomorfologi",
                interactive: true,
    title: 'Geomorfologi<br />\
    <img src="styles/legend/Geomorfologi_10_0.png" /> Alluvial Plains<br />\
    <img src="styles/legend/Geomorfologi_10_1.png" /> Alluvial Valleys<br />\
    <img src="styles/legend/Geomorfologi_10_2.png" /> Hills<br />\
    <img src="styles/legend/Geomorfologi_10_3.png" /> Mountains<br />\
    <img src="styles/legend/Geomorfologi_10_4.png" /> Plains<br />\
    <img src="styles/legend/Geomorfologi_10_5.png" /> Swamps<br />\
    <img src="styles/legend/Geomorfologi_10_6.png" /> Terraces<br />\
    <img src="styles/legend/Geomorfologi_10_7.png" /> Tidal Swamps<br />'
        });
var format_ProduktivitasAkuifer_11 = new ol.format.GeoJSON();
var features_ProduktivitasAkuifer_11 = format_ProduktivitasAkuifer_11.readFeatures(json_ProduktivitasAkuifer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProduktivitasAkuifer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProduktivitasAkuifer_11.addFeatures(features_ProduktivitasAkuifer_11);
var lyr_ProduktivitasAkuifer_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProduktivitasAkuifer_11, 
                style: style_ProduktivitasAkuifer_11,
                popuplayertitle: "Produktivitas Akuifer",
                interactive: true,
    title: 'Produktivitas Akuifer<br />\
    <img src="styles/legend/ProduktivitasAkuifer_11_0.png" /> Akuifer dgn keterusan rendah<br />'
        });
var format_RawanKarhutla_12 = new ol.format.GeoJSON();
var features_RawanKarhutla_12 = format_RawanKarhutla_12.readFeatures(json_RawanKarhutla_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanKarhutla_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanKarhutla_12.addFeatures(features_RawanKarhutla_12);
var lyr_RawanKarhutla_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanKarhutla_12, 
                style: style_RawanKarhutla_12,
                popuplayertitle: "Rawan Karhutla",
                interactive: true,
    title: 'Rawan Karhutla<br />\
    <img src="styles/legend/RawanKarhutla_12_0.png" /> Rawan Kebakaran Rendah<br />\
    <img src="styles/legend/RawanKarhutla_12_1.png" /> Rawan Kebakaran Sedang<br />\
    <img src="styles/legend/RawanKarhutla_12_2.png" /> Rawan Kebakaran Tinggi<br />\
    <img src="styles/legend/RawanKarhutla_12_3.png" /> Rawan Kebakaran Sangat Tinggi<br />'
        });
var format_RawanBanjir_13 = new ol.format.GeoJSON();
var features_RawanBanjir_13 = format_RawanBanjir_13.readFeatures(json_RawanBanjir_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanBanjir_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanBanjir_13.addFeatures(features_RawanBanjir_13);
var lyr_RawanBanjir_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanBanjir_13, 
                style: style_RawanBanjir_13,
                popuplayertitle: "Rawan Banjir",
                interactive: true,
    title: 'Rawan Banjir<br />\
    <img src="styles/legend/RawanBanjir_13_0.png" /> Rawan Banjir Rendah<br />\
    <img src="styles/legend/RawanBanjir_13_1.png" /> Rawan Banjir Sedang<br />\
    <img src="styles/legend/RawanBanjir_13_2.png" /> Rawan Banjir Tinggi<br />\
    <img src="styles/legend/RawanBanjir_13_3.png" /> Rawan Banjir Sangat Tinggi<br />'
        });
var format_RawanLongsor_14 = new ol.format.GeoJSON();
var features_RawanLongsor_14 = format_RawanLongsor_14.readFeatures(json_RawanLongsor_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawanLongsor_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawanLongsor_14.addFeatures(features_RawanLongsor_14);
var lyr_RawanLongsor_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawanLongsor_14, 
                style: style_RawanLongsor_14,
                popuplayertitle: "Rawan Longsor",
                interactive: true,
    title: 'Rawan Longsor<br />\
    <img src="styles/legend/RawanLongsor_14_0.png" /> Rawan Longsor Rendah<br />\
    <img src="styles/legend/RawanLongsor_14_1.png" /> Rawan Longsor Sedang<br />\
    <img src="styles/legend/RawanLongsor_14_2.png" /> Rawan Longsor Tinggi<br />\
    <img src="styles/legend/RawanLongsor_14_3.png" /> Rawan Longsor Sangat Tinggi<br />'
        });
var format_KawasanHutan_15 = new ol.format.GeoJSON();
var features_KawasanHutan_15 = format_KawasanHutan_15.readFeatures(json_KawasanHutan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutan_15.addFeatures(features_KawasanHutan_15);
var lyr_KawasanHutan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanHutan_15, 
                style: style_KawasanHutan_15,
                popuplayertitle: "Kawasan Hutan",
                interactive: true,
    title: 'Kawasan Hutan<br />\
    <img src="styles/legend/KawasanHutan_15_0.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KawasanHutan_15_1.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KawasanHutan_15_2.png" /> Kawasan Hutan Produksi yang dapat di Konversi<br />'
        });
var format_HAT_16 = new ol.format.GeoJSON();
var features_HAT_16 = format_HAT_16.readFeatures(json_HAT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAT_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAT_16.addFeatures(features_HAT_16);
var lyr_HAT_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAT_16, 
                style: style_HAT_16,
                popuplayertitle: "HAT",
                interactive: true,
    title: 'HAT<br />\
    <img src="styles/legend/HAT_16_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/HAT_16_1.png" /> Hak Milik<br />\
    <img src="styles/legend/HAT_16_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/HAT_16_3.png" /> Kosong<br />'
        });
var format_KesesuaianPengembanganWilayahSMCA_17 = new ol.format.GeoJSON();
var features_KesesuaianPengembanganWilayahSMCA_17 = format_KesesuaianPengembanganWilayahSMCA_17.readFeatures(json_KesesuaianPengembanganWilayahSMCA_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianPengembanganWilayahSMCA_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianPengembanganWilayahSMCA_17.addFeatures(features_KesesuaianPengembanganWilayahSMCA_17);
var lyr_KesesuaianPengembanganWilayahSMCA_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianPengembanganWilayahSMCA_17, 
                style: style_KesesuaianPengembanganWilayahSMCA_17,
                popuplayertitle: "Kesesuaian Pengembangan Wilayah (SMCA)",
                interactive: true,
    title: 'Kesesuaian Pengembangan Wilayah (SMCA)<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_17_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_17_1.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_17_2.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_17_3.png" /> Sangat Sesuai<br />'
        });
var format_analisisjangkauansinyal_18 = new ol.format.GeoJSON();
var features_analisisjangkauansinyal_18 = format_analisisjangkauansinyal_18.readFeatures(json_analisisjangkauansinyal_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_analisisjangkauansinyal_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_analisisjangkauansinyal_18.addFeatures(features_analisisjangkauansinyal_18);
var lyr_analisisjangkauansinyal_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_analisisjangkauansinyal_18, 
                style: style_analisisjangkauansinyal_18,
                popuplayertitle: "analisis jangkauan sinyal",
                interactive: true,
    title: 'analisis jangkauan sinyal<br />\
    <img src="styles/legend/analisisjangkauansinyal_18_0.png" /> Kurang<br />\
    <img src="styles/legend/analisisjangkauansinyal_18_1.png" /> Cukup<br />\
    <img src="styles/legend/analisisjangkauansinyal_18_2.png" /> Baik<br />\
    <img src="styles/legend/analisisjangkauansinyal_18_3.png" /> Baik Sekali<br />'
        });
var lyr_akumulasi_genangan_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "akumulasi_genangan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/akumulasi_genangan_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12229500.180503, 135799.488707, 12248275.991462, 154031.411488]
                            })
                        });
var format_KEMAMPUANLAHAN_20 = new ol.format.GeoJSON();
var features_KEMAMPUANLAHAN_20 = format_KEMAMPUANLAHAN_20.readFeatures(json_KEMAMPUANLAHAN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEMAMPUANLAHAN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEMAMPUANLAHAN_20.addFeatures(features_KEMAMPUANLAHAN_20);
var lyr_KEMAMPUANLAHAN_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEMAMPUANLAHAN_20, 
                style: style_KEMAMPUANLAHAN_20,
                popuplayertitle: "KEMAMPUAN LAHAN",
                interactive: true,
    title: 'KEMAMPUAN LAHAN<br />\
    <img src="styles/legend/KEMAMPUANLAHAN_20_0.png" /> RENDAH<br />\
    <img src="styles/legend/KEMAMPUANLAHAN_20_1.png" /> SEDANG<br />\
    <img src="styles/legend/KEMAMPUANLAHAN_20_2.png" /> TINGGI<br />\
    <img src="styles/legend/KEMAMPUANLAHAN_20_3.png" /> SANGAT TINGGI<br />'
        });
var format_SKLBENCANA_21 = new ol.format.GeoJSON();
var features_SKLBENCANA_21 = format_SKLBENCANA_21.readFeatures(json_SKLBENCANA_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLBENCANA_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLBENCANA_21.addFeatures(features_SKLBENCANA_21);
var lyr_SKLBENCANA_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLBENCANA_21, 
                style: style_SKLBENCANA_21,
                popuplayertitle: "SKL BENCANA",
                interactive: true,
    title: 'SKL BENCANA<br />\
    <img src="styles/legend/SKLBENCANA_21_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/SKLBENCANA_21_1.png" /> Rendah<br />\
    <img src="styles/legend/SKLBENCANA_21_2.png" /> Sedang<br />\
    <img src="styles/legend/SKLBENCANA_21_3.png" /> Tinggi<br />\
    <img src="styles/legend/SKLBENCANA_21_4.png" /> Sangat Tinggi<br />'
        });
var format_SKLPEMBUANGANLIMBAH_22 = new ol.format.GeoJSON();
var features_SKLPEMBUANGANLIMBAH_22 = format_SKLPEMBUANGANLIMBAH_22.readFeatures(json_SKLPEMBUANGANLIMBAH_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLPEMBUANGANLIMBAH_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLPEMBUANGANLIMBAH_22.addFeatures(features_SKLPEMBUANGANLIMBAH_22);
var lyr_SKLPEMBUANGANLIMBAH_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLPEMBUANGANLIMBAH_22, 
                style: style_SKLPEMBUANGANLIMBAH_22,
                popuplayertitle: "SKL PEMBUANGAN LIMBAH",
                interactive: true,
    title: 'SKL PEMBUANGAN LIMBAH<br />\
    <img src="styles/legend/SKLPEMBUANGANLIMBAH_22_0.png" /> Rendah<br />\
    <img src="styles/legend/SKLPEMBUANGANLIMBAH_22_1.png" /> Sedang<br />\
    <img src="styles/legend/SKLPEMBUANGANLIMBAH_22_2.png" /> Tinggi<br />\
    <img src="styles/legend/SKLPEMBUANGANLIMBAH_22_3.png" /> Sangat Tinggi<br />'
        });
var format_SKLEROSI_23 = new ol.format.GeoJSON();
var features_SKLEROSI_23 = format_SKLEROSI_23.readFeatures(json_SKLEROSI_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLEROSI_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLEROSI_23.addFeatures(features_SKLEROSI_23);
var lyr_SKLEROSI_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLEROSI_23, 
                style: style_SKLEROSI_23,
                popuplayertitle: "SKL EROSI",
                interactive: true,
    title: 'SKL EROSI<br />\
    <img src="styles/legend/SKLEROSI_23_0.png" /> Sangat rendah<br />\
    <img src="styles/legend/SKLEROSI_23_1.png" /> Rendah<br />\
    <img src="styles/legend/SKLEROSI_23_2.png" /> Sedang<br />\
    <img src="styles/legend/SKLEROSI_23_3.png" /> Tinggi<br />'
        });
var format_SKLKETERSEDIAANAIR_24 = new ol.format.GeoJSON();
var features_SKLKETERSEDIAANAIR_24 = format_SKLKETERSEDIAANAIR_24.readFeatures(json_SKLKETERSEDIAANAIR_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLKETERSEDIAANAIR_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLKETERSEDIAANAIR_24.addFeatures(features_SKLKETERSEDIAANAIR_24);
var lyr_SKLKETERSEDIAANAIR_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLKETERSEDIAANAIR_24, 
                style: style_SKLKETERSEDIAANAIR_24,
                popuplayertitle: "SKL KETERSEDIAAN AIR",
                interactive: true,
    title: 'SKL KETERSEDIAAN AIR<br />\
    <img src="styles/legend/SKLKETERSEDIAANAIR_24_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/SKLKETERSEDIAANAIR_24_1.png" /> Rendah<br />\
    <img src="styles/legend/SKLKETERSEDIAANAIR_24_2.png" /> Sedang<br />\
    <img src="styles/legend/SKLKETERSEDIAANAIR_24_3.png" /> Tinggi<br />\
    <img src="styles/legend/SKLKETERSEDIAANAIR_24_4.png" /> Sangat Tinggi<br />'
        });
var format_SKLKESTABILANPONDASI_25 = new ol.format.GeoJSON();
var features_SKLKESTABILANPONDASI_25 = format_SKLKESTABILANPONDASI_25.readFeatures(json_SKLKESTABILANPONDASI_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLKESTABILANPONDASI_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLKESTABILANPONDASI_25.addFeatures(features_SKLKESTABILANPONDASI_25);
var lyr_SKLKESTABILANPONDASI_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLKESTABILANPONDASI_25, 
                style: style_SKLKESTABILANPONDASI_25,
                popuplayertitle: "SKL KESTABILAN PONDASI",
                interactive: true,
    title: 'SKL KESTABILAN PONDASI<br />\
    <img src="styles/legend/SKLKESTABILANPONDASI_25_0.png" /> Rendah<br />\
    <img src="styles/legend/SKLKESTABILANPONDASI_25_1.png" /> Sedang<br />\
    <img src="styles/legend/SKLKESTABILANPONDASI_25_2.png" /> Tinggi<br />\
    <img src="styles/legend/SKLKESTABILANPONDASI_25_3.png" /> Sangat Tinggi<br />'
        });
var format_SKLKESTABILANLERENG_26 = new ol.format.GeoJSON();
var features_SKLKESTABILANLERENG_26 = format_SKLKESTABILANLERENG_26.readFeatures(json_SKLKESTABILANLERENG_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLKESTABILANLERENG_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLKESTABILANLERENG_26.addFeatures(features_SKLKESTABILANLERENG_26);
var lyr_SKLKESTABILANLERENG_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLKESTABILANLERENG_26, 
                style: style_SKLKESTABILANLERENG_26,
                popuplayertitle: "SKL KESTABILAN LERENG",
                interactive: true,
    title: 'SKL KESTABILAN LERENG<br />\
    <img src="styles/legend/SKLKESTABILANLERENG_26_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/SKLKESTABILANLERENG_26_1.png" /> Rendah<br />\
    <img src="styles/legend/SKLKESTABILANLERENG_26_2.png" /> Sedang<br />\
    <img src="styles/legend/SKLKESTABILANLERENG_26_3.png" /> Tinggi<br />\
    <img src="styles/legend/SKLKESTABILANLERENG_26_4.png" /> Sangat Tinggi<br />'
        });
var format_SKLKEMUDAHANDIKERJAKAN_27 = new ol.format.GeoJSON();
var features_SKLKEMUDAHANDIKERJAKAN_27 = format_SKLKEMUDAHANDIKERJAKAN_27.readFeatures(json_SKLKEMUDAHANDIKERJAKAN_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLKEMUDAHANDIKERJAKAN_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLKEMUDAHANDIKERJAKAN_27.addFeatures(features_SKLKEMUDAHANDIKERJAKAN_27);
var lyr_SKLKEMUDAHANDIKERJAKAN_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLKEMUDAHANDIKERJAKAN_27, 
                style: style_SKLKEMUDAHANDIKERJAKAN_27,
                popuplayertitle: "SKL KEMUDAHAN DIKERJAKAN",
                interactive: true,
    title: 'SKL KEMUDAHAN DIKERJAKAN<br />\
    <img src="styles/legend/SKLKEMUDAHANDIKERJAKAN_27_0.png" /> Rendah<br />\
    <img src="styles/legend/SKLKEMUDAHANDIKERJAKAN_27_1.png" /> Sedang<br />\
    <img src="styles/legend/SKLKEMUDAHANDIKERJAKAN_27_2.png" /> Tinggi<br />\
    <img src="styles/legend/SKLKEMUDAHANDIKERJAKAN_27_3.png" /> Sangat Tinggi<br />'
        });
var format_SKLMORFOLOGI_28 = new ol.format.GeoJSON();
var features_SKLMORFOLOGI_28 = format_SKLMORFOLOGI_28.readFeatures(json_SKLMORFOLOGI_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLMORFOLOGI_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLMORFOLOGI_28.addFeatures(features_SKLMORFOLOGI_28);
var lyr_SKLMORFOLOGI_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SKLMORFOLOGI_28, 
                style: style_SKLMORFOLOGI_28,
                popuplayertitle: "SKL MORFOLOGI",
                interactive: true,
    title: 'SKL MORFOLOGI<br />\
    <img src="styles/legend/SKLMORFOLOGI_28_0.png" /> Sangat Rendah<br />\
    <img src="styles/legend/SKLMORFOLOGI_28_1.png" /> Rendah<br />\
    <img src="styles/legend/SKLMORFOLOGI_28_2.png" /> Sangat Tinggi<br />'
        });
var format_AnalisisGap_29 = new ol.format.GeoJSON();
var features_AnalisisGap_29 = format_AnalisisGap_29.readFeatures(json_AnalisisGap_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisGap_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisGap_29.addFeatures(features_AnalisisGap_29);
var lyr_AnalisisGap_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalisisGap_29, 
                style: style_AnalisisGap_29,
                popuplayertitle: "Analisis Gap",
                interactive: true,
    title: 'Analisis Gap<br />\
    <img src="styles/legend/AnalisisGap_29_0.png" /> Sesuai dan dapat dikembangkan<br />\
    <img src="styles/legend/AnalisisGap_29_1.png" /> Terdapat kegiatan tidak sesuai<br />'
        });
var format_LandvalueCapture_30 = new ol.format.GeoJSON();
var features_LandvalueCapture_30 = format_LandvalueCapture_30.readFeatures(json_LandvalueCapture_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LandvalueCapture_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LandvalueCapture_30.addFeatures(features_LandvalueCapture_30);
var lyr_LandvalueCapture_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LandvalueCapture_30, 
                style: style_LandvalueCapture_30,
                popuplayertitle: "Landvalue Capture",
                interactive: true,
    title: 'Landvalue Capture<br />\
    <img src="styles/legend/LandvalueCapture_30_0.png" /> Harga Tanah Sangat Rendah<br />\
    <img src="styles/legend/LandvalueCapture_30_1.png" /> Harga Tanah Rendah<br />\
    <img src="styles/legend/LandvalueCapture_30_2.png" /> Harga Tanah Sedang<br />\
    <img src="styles/legend/LandvalueCapture_30_3.png" /> Harga Tanah Tinggi<br />\
    <img src="styles/legend/LandvalueCapture_30_4.png" /> Harga Tanah Sangat Tinggi<br />'
        });
var lyr_AnalisisIntensitasPengembanganRuangKernelDensity_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "Analisis Intensitas Pengembangan Ruang (Kernel Density)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AnalisisIntensitasPengembanganRuangKernelDensity_31.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12229484.551829, 135811.738606, 12248282.752648, 154036.666536]
                            })
                        });
var format_JANGKAUANEVAKUASI_5_MENIT_32 = new ol.format.GeoJSON();
var features_JANGKAUANEVAKUASI_5_MENIT_32 = format_JANGKAUANEVAKUASI_5_MENIT_32.readFeatures(json_JANGKAUANEVAKUASI_5_MENIT_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JANGKAUANEVAKUASI_5_MENIT_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANEVAKUASI_5_MENIT_32.addFeatures(features_JANGKAUANEVAKUASI_5_MENIT_32);
var lyr_JANGKAUANEVAKUASI_5_MENIT_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUANEVAKUASI_5_MENIT_32, 
                style: style_JANGKAUANEVAKUASI_5_MENIT_32,
                popuplayertitle: "JANGKAUAN EVAKUASI_5_MENIT",
                interactive: true,
    title: 'JANGKAUAN EVAKUASI_5_MENIT<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_0.png" /> Kantor Camat Siding<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_1.png" /> PLBN Jagoi Babang Indonesia<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_2.png" /> Puskesmas Jagoi Babang<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_3.png" /> SDN 07 Jagoi Belida<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_4.png" /> SDN 08 Merendeng<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_5.png" /> SMPN 01 Kagoi Babang<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_6.png" /> SMPN 03 Jagoi Babang<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_7.png" /> SMPN 1 Siding<br />\
    <img src="styles/legend/JANGKAUANEVAKUASI_5_MENIT_32_8.png" /> SMPN 5 Jagoi Babang<br />'
        });
var format_KONSEPPOLARUANG_33 = new ol.format.GeoJSON();
var features_KONSEPPOLARUANG_33 = format_KONSEPPOLARUANG_33.readFeatures(json_KONSEPPOLARUANG_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONSEPPOLARUANG_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONSEPPOLARUANG_33.addFeatures(features_KONSEPPOLARUANG_33);
var lyr_KONSEPPOLARUANG_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONSEPPOLARUANG_33, 
                style: style_KONSEPPOLARUANG_33,
                popuplayertitle: "KONSEP POLA RUANG",
                interactive: true,
    title: 'KONSEP POLA RUANG<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_0.png" /> Badan Air<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_2.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_3.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_4.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_5.png" /> Jalur Hijau<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_6.png" /> Pariwisata<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_7.png" /> Pemakaman<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_8.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_9.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_10.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_11.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_12.png" /> Perkantoran<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_13.png" /> Perkebunan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_14.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_15.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_16.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_17.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_18.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_19.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_20.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_21.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_22.png" /> SPU Skala RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_23.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_24.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_25.png" /> Taman Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_26.png" /> Taman RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_27.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_33_28.png" /> Ruang Terbuka Non Hijau<br />'
        });
var format_SWP_BLOK_34 = new ol.format.GeoJSON();
var features_SWP_BLOK_34 = format_SWP_BLOK_34.readFeatures(json_SWP_BLOK_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWP_BLOK_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWP_BLOK_34.addFeatures(features_SWP_BLOK_34);
var lyr_SWP_BLOK_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWP_BLOK_34, 
                style: style_SWP_BLOK_34,
                popuplayertitle: "SWP_BLOK",
                interactive: true,
                title: '<img src="styles/legend/SWP_BLOK_34.png" /> SWP_BLOK'
            });
var format_BatasDesa_35 = new ol.format.GeoJSON();
var features_BatasDesa_35 = format_BatasDesa_35.readFeatures(json_BatasDesa_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_35.addFeatures(features_BatasDesa_35);
var lyr_BatasDesa_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_35, 
                style: style_BatasDesa_35,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_35.png" /> Batas Desa'
            });
var format_TOPONIMI_36 = new ol.format.GeoJSON();
var features_TOPONIMI_36 = format_TOPONIMI_36.readFeatures(json_TOPONIMI_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_36.addFeatures(features_TOPONIMI_36);
var lyr_TOPONIMI_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_36,
maxResolution:1.4002233076130983,
 
                style: style_TOPONIMI_36,
                popuplayertitle: "TOPONIMI",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_36.png" /> TOPONIMI'
            });
var format_VIDEO_DRONE_37 = new ol.format.GeoJSON();
var features_VIDEO_DRONE_37 = format_VIDEO_DRONE_37.readFeatures(json_VIDEO_DRONE_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIDEO_DRONE_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIDEO_DRONE_37.addFeatures(features_VIDEO_DRONE_37);
var lyr_VIDEO_DRONE_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIDEO_DRONE_37, 
                style: style_VIDEO_DRONE_37,
                popuplayertitle: "VIDEO_DRONE",
                interactive: true,
                title: '<img src="styles/legend/VIDEO_DRONE_37.png" /> VIDEO_DRONE'
            });
var group_ANALISIS = new ol.layer.Group({
                                layers: [lyr_KesesuaianPengembanganWilayahSMCA_17,lyr_analisisjangkauansinyal_18,lyr_akumulasi_genangan_19,lyr_KEMAMPUANLAHAN_20,lyr_SKLBENCANA_21,lyr_SKLPEMBUANGANLIMBAH_22,lyr_SKLEROSI_23,lyr_SKLKETERSEDIAANAIR_24,lyr_SKLKESTABILANPONDASI_25,lyr_SKLKESTABILANLERENG_26,lyr_SKLKEMUDAHANDIKERJAKAN_27,lyr_SKLMORFOLOGI_28,lyr_AnalisisGap_29,lyr_LandvalueCapture_30,lyr_AnalisisIntensitasPengembanganRuangKernelDensity_31,lyr_JANGKAUANEVAKUASI_5_MENIT_32,],
                                fold: "close",
                                title: "ANALISIS"});
var group_STATUSLAHAN = new ol.layer.Group({
                                layers: [lyr_KawasanHutan_15,lyr_HAT_16,],
                                fold: "close",
                                title: "STATUS LAHAN"});
var group_KEBENCANAAN = new ol.layer.Group({
                                layers: [lyr_RawanKarhutla_12,lyr_RawanBanjir_13,lyr_RawanLongsor_14,],
                                fold: "close",
                                title: "KEBENCANAAN"});
var group_LINGKUNGANFISIK = new ol.layer.Group({
                                layers: [lyr_WILAYAHKETINGGIAN_4,lyr_Slope_5,lyr_CAT_6,lyr_CurahHujanTahunan_7,lyr_DAS_8,lyr_Litologi_9,lyr_Geomorfologi_10,lyr_ProduktivitasAkuifer_11,],
                                fold: "close",
                                title: "LINGKUNGAN FISIK"});
var group_TATARUANG = new ol.layer.Group({
                                layers: [lyr_POLARUANGRTRWP_2,lyr_POLARUANGRDTR2019_3,],
                                fold: "close",
                                title: "TATARUANG"});

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_POLARUANGRTRWP_2.setVisible(false);lyr_POLARUANGRDTR2019_3.setVisible(false);lyr_WILAYAHKETINGGIAN_4.setVisible(false);lyr_Slope_5.setVisible(false);lyr_CAT_6.setVisible(false);lyr_CurahHujanTahunan_7.setVisible(false);lyr_DAS_8.setVisible(false);lyr_Litologi_9.setVisible(false);lyr_Geomorfologi_10.setVisible(false);lyr_ProduktivitasAkuifer_11.setVisible(false);lyr_RawanKarhutla_12.setVisible(false);lyr_RawanBanjir_13.setVisible(false);lyr_RawanLongsor_14.setVisible(false);lyr_KawasanHutan_15.setVisible(false);lyr_HAT_16.setVisible(false);lyr_KesesuaianPengembanganWilayahSMCA_17.setVisible(false);lyr_analisisjangkauansinyal_18.setVisible(false);lyr_akumulasi_genangan_19.setVisible(false);lyr_KEMAMPUANLAHAN_20.setVisible(false);lyr_SKLBENCANA_21.setVisible(false);lyr_SKLPEMBUANGANLIMBAH_22.setVisible(false);lyr_SKLEROSI_23.setVisible(false);lyr_SKLKETERSEDIAANAIR_24.setVisible(false);lyr_SKLKESTABILANPONDASI_25.setVisible(false);lyr_SKLKESTABILANLERENG_26.setVisible(false);lyr_SKLKEMUDAHANDIKERJAKAN_27.setVisible(false);lyr_SKLMORFOLOGI_28.setVisible(false);lyr_AnalisisGap_29.setVisible(false);lyr_LandvalueCapture_30.setVisible(false);lyr_AnalisisIntensitasPengembanganRuangKernelDensity_31.setVisible(false);lyr_JANGKAUANEVAKUASI_5_MENIT_32.setVisible(false);lyr_KONSEPPOLARUANG_33.setVisible(true);lyr_SWP_BLOK_34.setVisible(true);lyr_BatasDesa_35.setVisible(true);lyr_TOPONIMI_36.setVisible(true);lyr_VIDEO_DRONE_37.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,group_TATARUANG,group_LINGKUNGANFISIK,group_KEBENCANAAN,group_STATUSLAHAN,group_ANALISIS,lyr_KONSEPPOLARUANG_33,lyr_SWP_BLOK_34,lyr_BatasDesa_35,lyr_TOPONIMI_36,lyr_VIDEO_DRONE_37];
lyr_POLARUANGRTRWP_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'KODKWS': 'KODKWS', 'JNSRPR': 'JNSRPR', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'DLKPEL': 'DLKPEL', 'BPALUR': 'BPALUR', 'KPEKLT': 'KPEKLT', 'APKINT': 'APKINT', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_POLARUANGRDTR2019_3.set('fieldAliases', {'FID_18_POL': 'FID_18_POL', 'Zona_1': 'Zona_1', 'Zona_2': 'Zona_2', 'Kode_Z2': 'Kode_Z2', 'Zona_3': 'Zona_3', 'Kode_Z3': 'Kode_Z3', 'SUMBER': 'SUMBER', 'luas': 'luas', 'FID_03_BLO': 'FID_03_BLO', 'BWP': 'BWP', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'Luas_1': 'Luas_1', });
lyr_CAT_6.set('fieldAliases', {'NO': 'NO', 'NAMA': 'NAMA', 'PROVINSI': 'PROVINSI', 'KATEGORI': 'KATEGORI', 'LUAS': 'LUAS', 'Q1': 'Q1', 'Q2': 'Q2', });
lyr_CurahHujanTahunan_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'hujan': 'hujan', });
lyr_DAS_8.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', 'NAMA_DAS': 'NAMA_DAS', 'LUAS_HA': 'LUAS_HA', 'KEL_M': 'KEL_M', 'PRIORITAS_': 'PRIORITAS_', 'WIL_KERJA': 'WIL_KERJA', });
lyr_Litologi_9.set('fieldAliases', {'SIMBOL': 'SIMBOL', 'NAMA': 'NAMA', 'UMUR': 'UMUR', 'PULAU': 'PULAU', 'KODE_UNSUR': 'KODE_UNSUR', });
lyr_Geomorfologi_10.set('fieldAliases', {'REGIONAME': 'REGIONAME', 'UNITNAME': 'UNITNAME', });
lyr_ProduktivitasAkuifer_11.set('fieldAliases', {'HIDINDO_ID': 'HIDINDO_ID', 'PRODUK_AQ': 'PRODUK_AQ', 'KETERANGAN': 'KETERANGAN', 'LUAS': 'LUAS', });
lyr_RawanKarhutla_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_kab_be': 'FID_kab_be', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'BWP': 'BWP', 'raw_longso': 'raw_longso', 'raw_banjir': 'raw_banjir', 'raw_karhut': 'raw_karhut', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_HA': 'LUAS_HA', });
lyr_RawanBanjir_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_kab_be': 'FID_kab_be', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'BWP': 'BWP', 'raw_longso': 'raw_longso', 'raw_banjir': 'raw_banjir', 'raw_karhut': 'raw_karhut', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_HA': 'LUAS_HA', });
lyr_RawanLongsor_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_kab_be': 'FID_kab_be', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'BWP': 'BWP', 'raw_longso': 'raw_longso', 'raw_banjir': 'raw_banjir', 'raw_karhut': 'raw_karhut', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_HA': 'LUAS_HA', });
lyr_KawasanHutan_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', });
lyr_HAT_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'METODUKUR': 'METODUKUR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KesesuaianPengembanganWilayahSMCA_17.set('fieldAliases', {'slope': 'slope', 'LONGSOR': 'LONGSOR', 'TSUNAMI': 'TSUNAMI', 'KAW_HTN': 'KAW_HTN', 'BANJIR': 'BANJIR', 'SMCA': 'SMCA', });
lyr_analisisjangkauansinyal_18.set('fieldAliases', {'sinyal': 'sinyal', });
lyr_KEMAMPUANLAHAN_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLBENCANA_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLPEMBUANGANLIMBAH_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLEROSI_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLKETERSEDIAANAIR_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLKESTABILANPONDASI_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLKESTABILANLERENG_26.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLKEMUDAHANDIKERJAKAN_27.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SKLMORFOLOGI_28.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_SWP_BL': 'FID_SWP_BL', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'gridcode': 'gridcode', 'B_SLOPE': 'B_SLOPE', 'FID_kalsys': 'FID_kalsys', 'LCODE': 'LCODE', 'UNITNAME': 'UNITNAME', 'SOIL_TEXTU': 'SOIL_TEXTU', 'B_SO_TEXT': 'B_SO_TEXT', 'B_MORFO': 'B_MORFO', 'FID_Rast_2': 'FID_Rast_2', 'Id_1': 'Id_1', 'gridcode_1': 'gridcode_1', 'B_TWI': 'B_TWI', 'FID_altern': 'FID_altern', 'BWP': 'BWP', 'SBWP_1': 'SBWP_1', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK_1': 'BLOK_1', 'luas_ha': 'luas_ha', 'SKLMORF': 'SKLMORF', 'SKLMUDIKER': 'SKLMUDIKER', 'SKLLERENG': 'SKLLERENG', 'SKLPOND': 'SKLPOND', 'SKLKTAIR': 'SKLKTAIR', 'SKLDRAINAS': 'SKLDRAINAS', 'SKLEROS': 'SKLEROS', 'SKLLIMBAH': 'SKLLIMBAH', 'SKLBENCANA': 'SKLBENCANA', 'B_KM_LHN': 'B_KM_LHN', 'KMP_LAHAN': 'KMP_LAHAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AnalisisGap_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ket': 'ket', 'PL_2024': 'PL_2024', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Keterangan': 'Keterangan', });
lyr_LandvalueCapture_30.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC_1': 'WADMKC_1', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', 'SA_PAUDTK': 'SA_PAUDTK', 'SA_SMA': 'SA_SMA', 'SA_KN_PMRT': 'SA_KN_PMRT', 'SA_SD': 'SA_SD', 'SA_KESEHAT': 'SA_KESEHAT', 'SA_KAB': 'SA_KAB', 'Kemiringan': 'Kemiringan', 'ket_1': 'ket_1', 'STAT_STRA': 'STAT_STRA', });
lyr_JANGKAUANEVAKUASI_5_MENIT_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TUJUAN': 'TUJUAN', });
lyr_KONSEPPOLARUANG_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SWP_BLOK_34.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', });
lyr_BatasDesa_35.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_TOPONIMI_36.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_VIDEO_DRONE_37.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'video': 'video', 'LOKASI': 'LOKASI', });
lyr_POLARUANGRTRWP_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'KODKWS': 'TextEdit', 'JNSRPR': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'DLKPEL': 'TextEdit', 'BPALUR': 'TextEdit', 'KPEKLT': 'TextEdit', 'APKINT': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_POLARUANGRDTR2019_3.set('fieldImages', {'FID_18_POL': 'TextEdit', 'Zona_1': 'TextEdit', 'Zona_2': 'TextEdit', 'Kode_Z2': 'TextEdit', 'Zona_3': 'TextEdit', 'Kode_Z3': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', 'FID_03_BLO': 'TextEdit', 'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_CAT_6.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'PROVINSI': 'TextEdit', 'KATEGORI': 'TextEdit', 'LUAS': 'TextEdit', 'Q1': 'TextEdit', 'Q2': 'TextEdit', });
lyr_CurahHujanTahunan_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'hujan': 'TextEdit', });
lyr_DAS_8.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'NAMA_DAS': 'TextEdit', 'LUAS_HA': 'TextEdit', 'KEL_M': 'TextEdit', 'PRIORITAS_': 'TextEdit', 'WIL_KERJA': 'TextEdit', });
lyr_Litologi_9.set('fieldImages', {'SIMBOL': 'TextEdit', 'NAMA': 'TextEdit', 'UMUR': 'TextEdit', 'PULAU': 'TextEdit', 'KODE_UNSUR': 'TextEdit', });
lyr_Geomorfologi_10.set('fieldImages', {'REGIONAME': 'TextEdit', 'UNITNAME': 'TextEdit', });
lyr_ProduktivitasAkuifer_11.set('fieldImages', {'HIDINDO_ID': 'TextEdit', 'PRODUK_AQ': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_RawanKarhutla_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_kab_be': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'BWP': 'TextEdit', 'raw_longso': 'TextEdit', 'raw_banjir': 'TextEdit', 'raw_karhut': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_RawanBanjir_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_kab_be': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'BWP': 'TextEdit', 'raw_longso': 'TextEdit', 'raw_banjir': 'TextEdit', 'raw_karhut': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_RawanLongsor_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_kab_be': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'BWP': 'TextEdit', 'raw_longso': 'TextEdit', 'raw_banjir': 'TextEdit', 'raw_karhut': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_KawasanHutan_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', });
lyr_HAT_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'SUMBERGEOM': 'TextEdit', 'ALATUKUR': 'TextEdit', 'METODUKUR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KesesuaianPengembanganWilayahSMCA_17.set('fieldImages', {'slope': 'TextEdit', 'LONGSOR': 'TextEdit', 'TSUNAMI': 'TextEdit', 'KAW_HTN': 'TextEdit', 'BANJIR': 'TextEdit', 'SMCA': 'TextEdit', });
lyr_analisisjangkauansinyal_18.set('fieldImages', {'sinyal': 'TextEdit', });
lyr_KEMAMPUANLAHAN_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLBENCANA_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLPEMBUANGANLIMBAH_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLEROSI_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLKETERSEDIAANAIR_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLKESTABILANPONDASI_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLKESTABILANLERENG_26.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLKEMUDAHANDIKERJAKAN_27.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SKLMORFOLOGI_28.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_SWP_BL': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'gridcode': 'TextEdit', 'B_SLOPE': 'TextEdit', 'FID_kalsys': 'TextEdit', 'LCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'SOIL_TEXTU': 'TextEdit', 'B_SO_TEXT': 'TextEdit', 'B_MORFO': 'TextEdit', 'FID_Rast_2': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode_1': 'TextEdit', 'B_TWI': 'TextEdit', 'FID_altern': 'TextEdit', 'BWP': 'TextEdit', 'SBWP_1': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK_1': 'TextEdit', 'luas_ha': 'TextEdit', 'SKLMORF': 'TextEdit', 'SKLMUDIKER': 'TextEdit', 'SKLLERENG': 'TextEdit', 'SKLPOND': 'TextEdit', 'SKLKTAIR': 'TextEdit', 'SKLDRAINAS': 'TextEdit', 'SKLEROS': 'TextEdit', 'SKLLIMBAH': 'TextEdit', 'SKLBENCANA': 'TextEdit', 'B_KM_LHN': 'Range', 'KMP_LAHAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AnalisisGap_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'ket': 'TextEdit', 'PL_2024': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_LandvalueCapture_30.set('fieldImages', {'WADMKC': '', 'WADMKD': '', 'SBWP': '', 'FID_Batas_': '', 'WADMKC_1': '', 'WADMKK': '', 'BLOK': '', 'luas_ha': '', 'SA_PAUDTK': 'TextEdit', 'SA_SMA': 'TextEdit', 'SA_KN_PMRT': 'TextEdit', 'SA_SD': 'TextEdit', 'SA_KESEHAT': 'TextEdit', 'SA_KAB': 'TextEdit', 'Kemiringan': 'TextEdit', 'ket_1': 'TextEdit', 'STAT_STRA': 'TextEdit', });
lyr_JANGKAUANEVAKUASI_5_MENIT_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'TUJUAN': 'TextEdit', });
lyr_KONSEPPOLARUANG_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SWP_BLOK_34.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_BatasDesa_35.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_TOPONIMI_36.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_VIDEO_DRONE_37.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': 'TextEdit', 'video': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_POLARUANGRTRWP_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'KODKWS': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'KP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'DLKPEL': 'inline label - always visible', 'BPALUR': 'inline label - always visible', 'KPEKLT': 'inline label - always visible', 'APKINT': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'SHAPE_Leng': 'header label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_POLARUANGRDTR2019_3.set('fieldLabels', {'FID_18_POL': 'inline label - always visible', 'Zona_1': 'inline label - always visible', 'Zona_2': 'inline label - always visible', 'Kode_Z2': 'inline label - always visible', 'Zona_3': 'inline label - always visible', 'Kode_Z3': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'luas': 'inline label - always visible', 'FID_03_BLO': 'inline label - always visible', 'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'Luas_1': 'inline label - always visible', });
lyr_CAT_6.set('fieldLabels', {'NO': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Q1': 'inline label - always visible', 'Q2': 'inline label - always visible', });
lyr_CurahHujanTahunan_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'hujan': 'inline label - always visible', });
lyr_DAS_8.set('fieldLabels', {'NAME': 'inline label - always visible', 'LAYER': 'inline label - always visible', 'KML_STYLE': 'inline label - visible with data', 'KML_FOLDER': 'inline label - always visible', 'NAMA_DAS': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', 'KEL_M': 'inline label - always visible', 'PRIORITAS_': 'inline label - always visible', 'WIL_KERJA': 'inline label - visible with data', });
lyr_Litologi_9.set('fieldLabels', {'SIMBOL': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'UMUR': 'inline label - always visible', 'PULAU': 'inline label - always visible', 'KODE_UNSUR': 'inline label - visible with data', });
lyr_Geomorfologi_10.set('fieldLabels', {'REGIONAME': 'inline label - always visible', 'UNITNAME': 'inline label - always visible', });
lyr_ProduktivitasAkuifer_11.set('fieldLabels', {'HIDINDO_ID': 'inline label - always visible', 'PRODUK_AQ': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_RawanKarhutla_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_kab_be': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BWP': 'inline label - always visible', 'raw_longso': 'inline label - always visible', 'raw_banjir': 'inline label - always visible', 'raw_karhut': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', });
lyr_RawanBanjir_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_kab_be': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BWP': 'inline label - always visible', 'raw_longso': 'inline label - always visible', 'raw_banjir': 'inline label - always visible', 'raw_karhut': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', });
lyr_RawanLongsor_14.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_kab_be': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BWP': 'inline label - always visible', 'raw_longso': 'inline label - always visible', 'raw_banjir': 'inline label - always visible', 'raw_karhut': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', });
lyr_KawasanHutan_15.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', });
lyr_HAT_16.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KELURAHAN': 'inline label - always visible', 'TIPEHAK': 'inline label - always visible', 'TIPEPRODUK': 'inline label - always visible', 'TAHUN': 'inline label - always visible', 'NIB': 'inline label - always visible', 'LUASTERTUL': 'inline label - always visible', 'LUASPETA': 'inline label - always visible', 'SUMBERGEOM': 'inline label - always visible', 'ALATUKUR': 'inline label - always visible', 'METODUKUR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_KesesuaianPengembanganWilayahSMCA_17.set('fieldLabels', {'slope': 'inline label - always visible', 'LONGSOR': 'inline label - always visible', 'TSUNAMI': 'inline label - always visible', 'KAW_HTN': 'inline label - always visible', 'BANJIR': 'inline label - always visible', 'SMCA': 'inline label - always visible', });
lyr_analisisjangkauansinyal_18.set('fieldLabels', {'sinyal': 'inline label - always visible', });
lyr_KEMAMPUANLAHAN_20.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLBENCANA_21.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLPEMBUANGANLIMBAH_22.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLEROSI_23.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLKETERSEDIAANAIR_24.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLKESTABILANPONDASI_25.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLKESTABILANLERENG_26.set('fieldLabels', {'OBJECTID': 'no label', 'FID_SWP_BL': 'no label', 'SBWP': 'no label', 'BLOK': 'no label', 'gridcode': 'no label', 'B_SLOPE': 'no label', 'FID_kalsys': 'no label', 'LCODE': 'no label', 'UNITNAME': 'no label', 'SOIL_TEXTU': 'no label', 'B_SO_TEXT': 'no label', 'B_MORFO': 'no label', 'FID_Rast_2': 'no label', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLKEMUDAHANDIKERJAKAN_27.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_SWP_BL': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'B_SLOPE': 'inline label - always visible', 'FID_kalsys': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'UNITNAME': 'inline label - always visible', 'SOIL_TEXTU': 'inline label - always visible', 'B_SO_TEXT': 'inline label - always visible', 'B_MORFO': 'inline label - always visible', 'FID_Rast_2': 'inline label - always visible', 'Id_1': 'no label', 'gridcode_1': 'no label', 'B_TWI': 'no label', 'FID_altern': 'no label', 'BWP': 'no label', 'SBWP_1': 'no label', 'FID_Batas_': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'BLOK_1': 'no label', 'luas_ha': 'no label', 'SKLMORF': 'no label', 'SKLMUDIKER': 'no label', 'SKLLERENG': 'no label', 'SKLPOND': 'no label', 'SKLKTAIR': 'no label', 'SKLDRAINAS': 'no label', 'SKLEROS': 'no label', 'SKLLIMBAH': 'no label', 'SKLBENCANA': 'no label', 'B_KM_LHN': 'no label', 'KMP_LAHAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SKLMORFOLOGI_28.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_SWP_BL': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'B_SLOPE': 'inline label - always visible', 'FID_kalsys': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'UNITNAME': 'inline label - always visible', 'SOIL_TEXTU': 'inline label - always visible', 'B_SO_TEXT': 'inline label - always visible', 'B_MORFO': 'inline label - always visible', 'FID_Rast_2': 'inline label - always visible', 'Id_1': 'inline label - always visible', 'gridcode_1': 'inline label - always visible', 'B_TWI': 'inline label - always visible', 'FID_altern': 'inline label - always visible', 'BWP': 'inline label - always visible', 'SBWP_1': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK_1': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'SKLMORF': 'inline label - always visible', 'SKLMUDIKER': 'inline label - always visible', 'SKLLERENG': 'inline label - always visible', 'SKLPOND': 'inline label - always visible', 'SKLKTAIR': 'inline label - always visible', 'SKLDRAINAS': 'inline label - always visible', 'SKLEROS': 'inline label - always visible', 'SKLLIMBAH': 'inline label - always visible', 'SKLBENCANA': 'inline label - always visible', 'B_KM_LHN': 'inline label - visible with data', 'KMP_LAHAN': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_AnalisisGap_29.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'ket': 'inline label - always visible', 'PL_2024': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_LandvalueCapture_30.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC_1': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'luas_ha': 'inline label - always visible', 'SA_PAUDTK': 'inline label - always visible', 'SA_SMA': 'inline label - always visible', 'SA_KN_PMRT': 'inline label - always visible', 'SA_SD': 'inline label - always visible', 'SA_KESEHAT': 'inline label - always visible', 'SA_KAB': 'inline label - always visible', 'Kemiringan': 'inline label - always visible', 'ket_1': 'inline label - always visible', 'STAT_STRA': 'inline label - always visible', });
lyr_JANGKAUANEVAKUASI_5_MENIT_32.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'TUJUAN': 'inline label - always visible', });
lyr_KONSEPPOLARUANG_33.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'NAMZON': 'inline label - always visible', 'KODZON': 'inline label - always visible', 'NAMSZN': 'inline label - always visible', 'KODSZN': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'KODEWP': 'inline label - always visible', 'KODSWP': 'inline label - always visible', 'KODBLK': 'inline label - always visible', 'KODSBL': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'LP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'TOD_04': 'inline label - always visible', 'TEB_05': 'inline label - always visible', 'PUSLIT': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'TPZ_00': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_SWP_BLOK_34.set('fieldLabels', {'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'luas_ha': 'inline label - always visible', });
lyr_BatasDesa_35.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_TOPONIMI_36.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_VIDEO_DRONE_37.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'video': 'inline label - always visible', 'LOKASI': 'no label', });
lyr_VIDEO_DRONE_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});