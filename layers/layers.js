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
var lyr_WILAYAHKETINGGIAN_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "WILAYAH KETINGGIAN",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WILAYAHKETINGGIAN_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12226412.734333, 134755.377770, 12250251.969210, 153089.773643]
                            })
                        });
var lyr_Slope_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slope_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12226412.734333, 134755.377771, 12250251.969210, 153089.773643]
                            })
                        });
var format_POLARUANGRDTR2019_4 = new ol.format.GeoJSON();
var features_POLARUANGRDTR2019_4 = format_POLARUANGRDTR2019_4.readFeatures(json_POLARUANGRDTR2019_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRDTR2019_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRDTR2019_4.addFeatures(features_POLARUANGRDTR2019_4);
var lyr_POLARUANGRDTR2019_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLARUANGRDTR2019_4, 
                style: style_POLARUANGRDTR2019_4,
                popuplayertitle: "POLA RUANG RDTR 2019",
                interactive: true,
    title: 'POLA RUANG RDTR 2019<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_1.png" /> Hutan Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_2.png" /> Jalan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_3.png" /> Pemakaman<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_4.png" /> Perdagangan & Jasa Skala BWP<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_5.png" /> Perdagangan & Jasa Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_6.png" /> Perdagangan & Jasa Skala Sub-BWP<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_7.png" /> Perkebunan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_8.png" /> Pertanian Tanaman Pangan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_9.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_10.png" /> RTH Lainnya<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_11.png" /> Sentra Industri Kecil dan Menengah<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_12.png" /> SPU Kesehatan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_13.png" /> SPU Kesehatan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_14.png" /> SPU Olahraga Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_15.png" /> SPU Pendidikan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_16.png" /> SPU Pendidikan Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_17.png" /> SPU Pendidikan Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_18.png" /> SPU Pendidikan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_19.png" /> SPU Peribadatan Skala Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_20.png" /> SPU Peribadatan Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_21.png" /> SPU Peribadatan Skala RW<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_22.png" /> SPU Sosial Budaya Skala Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_23.png" /> SPU Transportasi Skala Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_24.png" /> Sungai<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_25.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_26.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_27.png" /> Taman Kota<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_28.png" /> Zona Pariwisata<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_29.png" /> Zona Perkantoran<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_30.png" /> Zona Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_31.png" /> Zona Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_32.png" /> Zona Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_33.png" /> Zona Sekitar Danau atau Waduk<br />\
    <img src="styles/legend/POLARUANGRDTR2019_4_34.png" /> Zona Sempadan Sungai<br />'
        });
var format_CAT_5 = new ol.format.GeoJSON();
var features_CAT_5 = format_CAT_5.readFeatures(json_CAT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAT_5.addFeatures(features_CAT_5);
var lyr_CAT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAT_5, 
                style: style_CAT_5,
                popuplayertitle: "CAT",
                interactive: true,
                title: '<img src="styles/legend/CAT_5.png" /> CAT'
            });
var format_CurahHujanTahunan_6 = new ol.format.GeoJSON();
var features_CurahHujanTahunan_6 = format_CurahHujanTahunan_6.readFeatures(json_CurahHujanTahunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurahHujanTahunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurahHujanTahunan_6.addFeatures(features_CurahHujanTahunan_6);
var lyr_CurahHujanTahunan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurahHujanTahunan_6, 
                style: style_CurahHujanTahunan_6,
                popuplayertitle: "Curah Hujan Tahunan",
                interactive: true,
    title: 'Curah Hujan Tahunan<br />\
    <img src="styles/legend/CurahHujanTahunan_6_0.png" /> 2000-3000 mm/tahun<br />\
    <img src="styles/legend/CurahHujanTahunan_6_1.png" /> 3000-4000 mm/tahun<br />\
    <img src="styles/legend/CurahHujanTahunan_6_2.png" /> 4000-5000 mm/tahun<br />'
        });
var format_DAS_7 = new ol.format.GeoJSON();
var features_DAS_7 = format_DAS_7.readFeatures(json_DAS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DAS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAS_7.addFeatures(features_DAS_7);
var lyr_DAS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAS_7, 
                style: style_DAS_7,
                popuplayertitle: "DAS",
                interactive: true,
                title: '<img src="styles/legend/DAS_7.png" /> DAS'
            });
var format_Litologi_8 = new ol.format.GeoJSON();
var features_Litologi_8 = format_Litologi_8.readFeatures(json_Litologi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologi_8.addFeatures(features_Litologi_8);
var lyr_Litologi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Litologi_8, 
                style: style_Litologi_8,
                popuplayertitle: "Litologi",
                interactive: true,
    title: 'Litologi<br />\
    <img src="styles/legend/Litologi_8_0.png" /> Batuan Gunungapi Niut<br />\
    <img src="styles/legend/Litologi_8_1.png" /> Batuan Gunungapi Raya<br />\
    <img src="styles/legend/Litologi_8_2.png" /> Batuan Gunungapi Serantak<br />\
    <img src="styles/legend/Litologi_8_3.png" /> Batupasir Kayan<br />\
    <img src="styles/legend/Litologi_8_4.png" /> Dasit Bawang<br />\
    <img src="styles/legend/Litologi_8_5.png" /> Endapan aluvium<br />\
    <img src="styles/legend/Litologi_8_6.png" /> Endapan Aluvium<br />\
    <img src="styles/legend/Litologi_8_7.png" /> Endapan Talus<br />\
    <img src="styles/legend/Litologi_8_8.png" /> Formasi Hamisan<br />\
    <img src="styles/legend/Litologi_8_9.png" /> Formasi Pendawan<br />\
    <img src="styles/legend/Litologi_8_10.png" /> Formasi Seminis<br />\
    <img src="styles/legend/Litologi_8_11.png" /> Granodiorit Jagoi<br />\
    <img src="styles/legend/Litologi_8_12.png" /> Granodiorit Mensibau<br />\
    <img src="styles/legend/Litologi_8_13.png" /> Intrusi Sintang<br />\
    <img src="styles/legend/Litologi_8_14.png" /> Kelompok Bengkayang<br />\
    <img src="styles/legend/Litologi_8_15.png" /> Komplek Serabang<br />'
        });
var format_Geomorfologi_9 = new ol.format.GeoJSON();
var features_Geomorfologi_9 = format_Geomorfologi_9.readFeatures(json_Geomorfologi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geomorfologi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geomorfologi_9.addFeatures(features_Geomorfologi_9);
var lyr_Geomorfologi_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geomorfologi_9, 
                style: style_Geomorfologi_9,
                popuplayertitle: "Geomorfologi",
                interactive: true,
    title: 'Geomorfologi<br />\
    <img src="styles/legend/Geomorfologi_9_0.png" /> Alluvial Plains<br />\
    <img src="styles/legend/Geomorfologi_9_1.png" /> Alluvial Valleys<br />\
    <img src="styles/legend/Geomorfologi_9_2.png" /> Hills<br />\
    <img src="styles/legend/Geomorfologi_9_3.png" /> Mountains<br />\
    <img src="styles/legend/Geomorfologi_9_4.png" /> Plains<br />\
    <img src="styles/legend/Geomorfologi_9_5.png" /> Swamps<br />\
    <img src="styles/legend/Geomorfologi_9_6.png" /> Terraces<br />\
    <img src="styles/legend/Geomorfologi_9_7.png" /> Tidal Swamps<br />'
        });
var format_HGU_10 = new ol.format.GeoJSON();
var features_HGU_10 = format_HGU_10.readFeatures(json_HGU_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HGU_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGU_10.addFeatures(features_HGU_10);
var lyr_HGU_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HGU_10, 
                style: style_HGU_10,
                popuplayertitle: "HGU",
                interactive: true,
                title: '<img src="styles/legend/HGU_10.png" /> HGU'
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
var format_POLARUANGRTRWP_15 = new ol.format.GeoJSON();
var features_POLARUANGRTRWP_15 = format_POLARUANGRTRWP_15.readFeatures(json_POLARUANGRTRWP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLARUANGRTRWP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLARUANGRTRWP_15.addFeatures(features_POLARUANGRTRWP_15);
var lyr_POLARUANGRTRWP_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLARUANGRTRWP_15, 
                style: style_POLARUANGRTRWP_15,
                popuplayertitle: "POLARUANG RTRWP",
                interactive: true,
    title: 'POLARUANG RTRWP<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_0.png" /> Badan Air<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_1.png" /> Kawasan Hutan Adat<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_2.png" /> Kawasan Hutan Produksi<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_3.png" /> Kawasan Konservasi<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_4.png" /> Kawasan Permukiman<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_5.png" /> Kawasan Pertahanan dan Keamanan<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_6.png" /> Kawasan Pertanian<br />\
    <img src="styles/legend/POLARUANGRTRWP_15_7.png" /> Kawasan yang Memberikan Perlindungan terhadap Kawasan Bawahannya<br />'
        });
var format_KawasanHutan_16 = new ol.format.GeoJSON();
var features_KawasanHutan_16 = format_KawasanHutan_16.readFeatures(json_KawasanHutan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutan_16.addFeatures(features_KawasanHutan_16);
var lyr_KawasanHutan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanHutan_16, 
                style: style_KawasanHutan_16,
                popuplayertitle: "Kawasan Hutan",
                interactive: true,
    title: 'Kawasan Hutan<br />\
    <img src="styles/legend/KawasanHutan_16_0.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KawasanHutan_16_1.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KawasanHutan_16_2.png" /> Kawasan Hutan Produksi yang dapat di Konversi<br />'
        });
var format_BATASWILAYAHPERENCANAAN_17 = new ol.format.GeoJSON();
var features_BATASWILAYAHPERENCANAAN_17 = format_BATASWILAYAHPERENCANAAN_17.readFeatures(json_BATASWILAYAHPERENCANAAN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASWILAYAHPERENCANAAN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASWILAYAHPERENCANAAN_17.addFeatures(features_BATASWILAYAHPERENCANAAN_17);
var lyr_BATASWILAYAHPERENCANAAN_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASWILAYAHPERENCANAAN_17, 
                style: style_BATASWILAYAHPERENCANAAN_17,
                popuplayertitle: "BATAS WILAYAH PERENCANAAN",
                interactive: true,
                title: '<img src="styles/legend/BATASWILAYAHPERENCANAAN_17.png" /> BATAS WILAYAH PERENCANAAN'
            });
var format_BatasDesa_18 = new ol.format.GeoJSON();
var features_BatasDesa_18 = format_BatasDesa_18.readFeatures(json_BatasDesa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_18.addFeatures(features_BatasDesa_18);
var lyr_BatasDesa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_18, 
                style: style_BatasDesa_18,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_18.png" /> Batas Desa'
            });
var format_HGU_19 = new ol.format.GeoJSON();
var features_HGU_19 = format_HGU_19.readFeatures(json_HGU_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HGU_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGU_19.addFeatures(features_HGU_19);
var lyr_HGU_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HGU_19, 
                style: style_HGU_19,
                popuplayertitle: "HGU",
                interactive: true,
                title: '<img src="styles/legend/HGU_19.png" /> HGU'
            });
var format_JaringanJalan_20 = new ol.format.GeoJSON();
var features_JaringanJalan_20 = format_JaringanJalan_20.readFeatures(json_JaringanJalan_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_20.addFeatures(features_JaringanJalan_20);
var lyr_JaringanJalan_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_20, 
                style: style_JaringanJalan_20,
                popuplayertitle: "Jaringan Jalan",
                interactive: true,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_20_0.png" /> KOLEKTOR<br />\
    <img src="styles/legend/JaringanJalan_20_1.png" /> LOKAL<br />\
    <img src="styles/legend/JaringanJalan_20_2.png" /> LAINNYA<br />\
    <img src="styles/legend/JaringanJalan_20_3.png" /> LINGKUNGAN<br />\
    <img src="styles/legend/JaringanJalan_20_4.png" /> SETAPAK<br />'
        });
var format_JARINGAN_LISTRIK_WP_21 = new ol.format.GeoJSON();
var features_JARINGAN_LISTRIK_WP_21 = format_JARINGAN_LISTRIK_WP_21.readFeatures(json_JARINGAN_LISTRIK_WP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JARINGAN_LISTRIK_WP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGAN_LISTRIK_WP_21.addFeatures(features_JARINGAN_LISTRIK_WP_21);
var lyr_JARINGAN_LISTRIK_WP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGAN_LISTRIK_WP_21, 
                style: style_JARINGAN_LISTRIK_WP_21,
                popuplayertitle: "JARINGAN_LISTRIK_WP",
                interactive: true,
    title: 'JARINGAN_LISTRIK_WP<br />\
    <img src="styles/legend/JARINGAN_LISTRIK_WP_21_0.png" /> SUTET<br />\
    <img src="styles/legend/JARINGAN_LISTRIK_WP_21_1.png" /> SUTM<br />'
        });
var format_Pembangkitlistrik_22 = new ol.format.GeoJSON();
var features_Pembangkitlistrik_22 = format_Pembangkitlistrik_22.readFeatures(json_Pembangkitlistrik_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pembangkitlistrik_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pembangkitlistrik_22.addFeatures(features_Pembangkitlistrik_22);
var lyr_Pembangkitlistrik_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pembangkitlistrik_22, 
                style: style_Pembangkitlistrik_22,
                popuplayertitle: "Pembangkit listrik",
                interactive: true,
                title: '<img src="styles/legend/Pembangkitlistrik_22.png" /> Pembangkit listrik'
            });
var format_BTS_23 = new ol.format.GeoJSON();
var features_BTS_23 = format_BTS_23.readFeatures(json_BTS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BTS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BTS_23.addFeatures(features_BTS_23);
var lyr_BTS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BTS_23, 
                style: style_BTS_23,
                popuplayertitle: "BTS",
                interactive: true,
                title: '<img src="styles/legend/BTS_23.png" /> BTS'
            });
var format_SPAM_24 = new ol.format.GeoJSON();
var features_SPAM_24 = format_SPAM_24.readFeatures(json_SPAM_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPAM_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPAM_24.addFeatures(features_SPAM_24);
var lyr_SPAM_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPAM_24, 
                style: style_SPAM_24,
                popuplayertitle: "SPAM",
                interactive: true,
                title: '<img src="styles/legend/SPAM_24.png" /> SPAM'
            });
var format_HAT_25 = new ol.format.GeoJSON();
var features_HAT_25 = format_HAT_25.readFeatures(json_HAT_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAT_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAT_25.addFeatures(features_HAT_25);
var lyr_HAT_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAT_25, 
                style: style_HAT_25,
                popuplayertitle: "HAT",
                interactive: true,
    title: 'HAT<br />\
    <img src="styles/legend/HAT_25_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/HAT_25_1.png" /> Hak Milik<br />\
    <img src="styles/legend/HAT_25_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/HAT_25_3.png" /> Kosong<br />'
        });
var format_PLBN_26 = new ol.format.GeoJSON();
var features_PLBN_26 = format_PLBN_26.readFeatures(json_PLBN_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLBN_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLBN_26.addFeatures(features_PLBN_26);
var lyr_PLBN_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLBN_26, 
                style: style_PLBN_26,
                popuplayertitle: "PLBN",
                interactive: true,
                title: '<img src="styles/legend/PLBN_26.png" /> PLBN'
            });
var format_VIDEO_DRONE_27 = new ol.format.GeoJSON();
var features_VIDEO_DRONE_27 = format_VIDEO_DRONE_27.readFeatures(json_VIDEO_DRONE_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIDEO_DRONE_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIDEO_DRONE_27.addFeatures(features_VIDEO_DRONE_27);
var lyr_VIDEO_DRONE_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIDEO_DRONE_27, 
                style: style_VIDEO_DRONE_27,
                popuplayertitle: "VIDEO_DRONE",
                interactive: true,
                title: '<img src="styles/legend/VIDEO_DRONE_27.png" /> VIDEO_DRONE'
            });
var format_KesesuaianPengembanganWilayahSMCA_28 = new ol.format.GeoJSON();
var features_KesesuaianPengembanganWilayahSMCA_28 = format_KesesuaianPengembanganWilayahSMCA_28.readFeatures(json_KesesuaianPengembanganWilayahSMCA_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesesuaianPengembanganWilayahSMCA_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianPengembanganWilayahSMCA_28.addFeatures(features_KesesuaianPengembanganWilayahSMCA_28);
var lyr_KesesuaianPengembanganWilayahSMCA_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianPengembanganWilayahSMCA_28, 
                style: style_KesesuaianPengembanganWilayahSMCA_28,
                popuplayertitle: "Kesesuaian Pengembangan Wilayah (SMCA)",
                interactive: true,
    title: 'Kesesuaian Pengembangan Wilayah (SMCA)<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_28_0.png" /> Tidak Sesuai<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_28_1.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_28_2.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/KesesuaianPengembanganWilayahSMCA_28_3.png" /> Sangat Sesuai<br />'
        });
var format_FungsiPendidikan_29 = new ol.format.GeoJSON();
var features_FungsiPendidikan_29 = format_FungsiPendidikan_29.readFeatures(json_FungsiPendidikan_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPendidikan_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPendidikan_29.addFeatures(features_FungsiPendidikan_29);
var lyr_FungsiPendidikan_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiPendidikan_29, 
                style: style_FungsiPendidikan_29,
                popuplayertitle: "Fungsi Pendidikan",
                interactive: true,
                title: '<img src="styles/legend/FungsiPendidikan_29.png" /> Fungsi Pendidikan'
            });
var format_FungsiPertahanandanKeamanan_30 = new ol.format.GeoJSON();
var features_FungsiPertahanandanKeamanan_30 = format_FungsiPertahanandanKeamanan_30.readFeatures(json_FungsiPertahanandanKeamanan_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPertahanandanKeamanan_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPertahanandanKeamanan_30.addFeatures(features_FungsiPertahanandanKeamanan_30);
var lyr_FungsiPertahanandanKeamanan_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiPertahanandanKeamanan_30, 
                style: style_FungsiPertahanandanKeamanan_30,
                popuplayertitle: "Fungsi Pertahanan dan Keamanan",
                interactive: true,
                title: '<img src="styles/legend/FungsiPertahanandanKeamanan_30.png" /> Fungsi Pertahanan dan Keamanan'
            });
var format_FungsiKesehatan_31 = new ol.format.GeoJSON();
var features_FungsiKesehatan_31 = format_FungsiKesehatan_31.readFeatures(json_FungsiKesehatan_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiKesehatan_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiKesehatan_31.addFeatures(features_FungsiKesehatan_31);
var lyr_FungsiKesehatan_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiKesehatan_31, 
                style: style_FungsiKesehatan_31,
                popuplayertitle: "Fungsi Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/FungsiKesehatan_31.png" /> Fungsi Kesehatan'
            });
var format_FungsiPemerintahan_32 = new ol.format.GeoJSON();
var features_FungsiPemerintahan_32 = format_FungsiPemerintahan_32.readFeatures(json_FungsiPemerintahan_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPemerintahan_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPemerintahan_32.addFeatures(features_FungsiPemerintahan_32);
var lyr_FungsiPemerintahan_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiPemerintahan_32, 
                style: style_FungsiPemerintahan_32,
                popuplayertitle: "Fungsi Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/FungsiPemerintahan_32.png" /> Fungsi Pemerintahan'
            });
var format_FungsiPerdagangandanJasa_33 = new ol.format.GeoJSON();
var features_FungsiPerdagangandanJasa_33 = format_FungsiPerdagangandanJasa_33.readFeatures(json_FungsiPerdagangandanJasa_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FungsiPerdagangandanJasa_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FungsiPerdagangandanJasa_33.addFeatures(features_FungsiPerdagangandanJasa_33);
var lyr_FungsiPerdagangandanJasa_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FungsiPerdagangandanJasa_33, 
                style: style_FungsiPerdagangandanJasa_33,
                popuplayertitle: "Fungsi Perdagangan dan Jasa",
                interactive: true,
                title: '<img src="styles/legend/FungsiPerdagangandanJasa_33.png" /> Fungsi Perdagangan dan Jasa'
            });
var format_TOPONIMI_34 = new ol.format.GeoJSON();
var features_TOPONIMI_34 = format_TOPONIMI_34.readFeatures(json_TOPONIMI_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_34.addFeatures(features_TOPONIMI_34);
var lyr_TOPONIMI_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_34,
maxResolution:7.00111653806549,
 
                style: style_TOPONIMI_34,
                popuplayertitle: "TOPONIMI",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_34.png" /> TOPONIMI'
            });
var format_analisis_jangkauan_sinyal_35 = new ol.format.GeoJSON();
var features_analisis_jangkauan_sinyal_35 = format_analisis_jangkauan_sinyal_35.readFeatures(json_analisis_jangkauan_sinyal_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_analisis_jangkauan_sinyal_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_analisis_jangkauan_sinyal_35.addFeatures(features_analisis_jangkauan_sinyal_35);
var lyr_analisis_jangkauan_sinyal_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_analisis_jangkauan_sinyal_35, 
                style: style_analisis_jangkauan_sinyal_35,
                popuplayertitle: "analisis_jangkauan_sinyal",
                interactive: true,
    title: 'analisis_jangkauan_sinyal<br />\
    <img src="styles/legend/analisis_jangkauan_sinyal_35_0.png" /> Kurang<br />\
    <img src="styles/legend/analisis_jangkauan_sinyal_35_1.png" /> Cukup<br />\
    <img src="styles/legend/analisis_jangkauan_sinyal_35_2.png" /> Baik<br />\
    <img src="styles/legend/analisis_jangkauan_sinyal_35_3.png" /> Baik Sekali<br />'
        });
var format_PolaRuang_36 = new ol.format.GeoJSON();
var features_PolaRuang_36 = format_PolaRuang_36.readFeatures(json_PolaRuang_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuang_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuang_36.addFeatures(features_PolaRuang_36);
var lyr_PolaRuang_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolaRuang_36, 
                style: style_PolaRuang_36,
                popuplayertitle: "Pola Ruang",
                interactive: true,
    title: 'Pola Ruang<br />\
    <img src="styles/legend/PolaRuang_36_0.png" /> Badan Air<br />\
    <img src="styles/legend/PolaRuang_36_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/PolaRuang_36_2.png" /> Pemakaman<br />\
    <img src="styles/legend/PolaRuang_36_3.png" /> Jalur Hijau<br />\
    <img src="styles/legend/PolaRuang_36_4.png" /> Taman RW<br />\
    <img src="styles/legend/PolaRuang_36_5.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/PolaRuang_36_6.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/PolaRuang_36_7.png" /> Hortikultura<br />\
    <img src="styles/legend/PolaRuang_36_8.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/PolaRuang_36_9.png" /> Pariwisata<br />\
    <img src="styles/legend/PolaRuang_36_10.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/PolaRuang_36_11.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/PolaRuang_36_12.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/PolaRuang_36_13.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/PolaRuang_36_14.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/PolaRuang_36_15.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/PolaRuang_36_16.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/PolaRuang_36_17.png" /> Perkantoran<br />\
    <img src="styles/legend/PolaRuang_36_18.png" /> Perkebunan<br />\
    <img src="styles/legend/PolaRuang_36_19.png" /> Perkebunan Rakyat<br />\
    <img src="styles/legend/PolaRuang_36_20.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/PolaRuang_36_21.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/PolaRuang_36_22.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/PolaRuang_36_23.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/PolaRuang_36_24.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/PolaRuang_36_25.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/PolaRuang_36_26.png" /> SPU Skala RW<br />\
    <img src="styles/legend/PolaRuang_36_27.png" /> Transportasi<br />'
        });
var format_SWP_BLOK_37 = new ol.format.GeoJSON();
var features_SWP_BLOK_37 = format_SWP_BLOK_37.readFeatures(json_SWP_BLOK_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWP_BLOK_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWP_BLOK_37.addFeatures(features_SWP_BLOK_37);
var lyr_SWP_BLOK_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWP_BLOK_37, 
                style: style_SWP_BLOK_37,
                popuplayertitle: "SWP_BLOK",
                interactive: true,
                title: '<img src="styles/legend/SWP_BLOK_37.png" /> SWP_BLOK'
            });

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_WILAYAHKETINGGIAN_2.setVisible(false);lyr_Slope_3.setVisible(false);lyr_POLARUANGRDTR2019_4.setVisible(false);lyr_CAT_5.setVisible(false);lyr_CurahHujanTahunan_6.setVisible(false);lyr_DAS_7.setVisible(false);lyr_Litologi_8.setVisible(false);lyr_Geomorfologi_9.setVisible(false);lyr_HGU_10.setVisible(false);lyr_ProduktivitasAkuifer_11.setVisible(false);lyr_RawanKarhutla_12.setVisible(false);lyr_RawanBanjir_13.setVisible(false);lyr_RawanLongsor_14.setVisible(false);lyr_POLARUANGRTRWP_15.setVisible(false);lyr_KawasanHutan_16.setVisible(false);lyr_BATASWILAYAHPERENCANAAN_17.setVisible(true);lyr_BatasDesa_18.setVisible(true);lyr_HGU_19.setVisible(false);lyr_JaringanJalan_20.setVisible(false);lyr_JARINGAN_LISTRIK_WP_21.setVisible(false);lyr_Pembangkitlistrik_22.setVisible(false);lyr_BTS_23.setVisible(false);lyr_SPAM_24.setVisible(false);lyr_HAT_25.setVisible(false);lyr_PLBN_26.setVisible(true);lyr_VIDEO_DRONE_27.setVisible(true);lyr_KesesuaianPengembanganWilayahSMCA_28.setVisible(false);lyr_FungsiPendidikan_29.setVisible(false);lyr_FungsiPertahanandanKeamanan_30.setVisible(false);lyr_FungsiKesehatan_31.setVisible(false);lyr_FungsiPemerintahan_32.setVisible(false);lyr_FungsiPerdagangandanJasa_33.setVisible(false);lyr_TOPONIMI_34.setVisible(true);lyr_analisis_jangkauan_sinyal_35.setVisible(false);lyr_PolaRuang_36.setVisible(true);lyr_SWP_BLOK_37.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_WILAYAHKETINGGIAN_2,lyr_Slope_3,lyr_POLARUANGRDTR2019_4,lyr_CAT_5,lyr_CurahHujanTahunan_6,lyr_DAS_7,lyr_Litologi_8,lyr_Geomorfologi_9,lyr_HGU_10,lyr_ProduktivitasAkuifer_11,lyr_RawanKarhutla_12,lyr_RawanBanjir_13,lyr_RawanLongsor_14,lyr_POLARUANGRTRWP_15,lyr_KawasanHutan_16,lyr_BATASWILAYAHPERENCANAAN_17,lyr_BatasDesa_18,lyr_HGU_19,lyr_JaringanJalan_20,lyr_JARINGAN_LISTRIK_WP_21,lyr_Pembangkitlistrik_22,lyr_BTS_23,lyr_SPAM_24,lyr_HAT_25,lyr_PLBN_26,lyr_VIDEO_DRONE_27,lyr_KesesuaianPengembanganWilayahSMCA_28,lyr_FungsiPendidikan_29,lyr_FungsiPertahanandanKeamanan_30,lyr_FungsiKesehatan_31,lyr_FungsiPemerintahan_32,lyr_FungsiPerdagangandanJasa_33,lyr_TOPONIMI_34,lyr_analisis_jangkauan_sinyal_35,lyr_PolaRuang_36,lyr_SWP_BLOK_37];
lyr_POLARUANGRDTR2019_4.set('fieldAliases', {'FID_18_POL': 'FID_18_POL', 'Zona_1': 'Zona_1', 'Zona_2': 'Zona_2', 'Kode_Z2': 'Kode_Z2', 'Zona_3': 'Zona_3', 'Kode_Z3': 'Kode_Z3', 'SUMBER': 'SUMBER', 'luas': 'luas', 'FID_03_BLO': 'FID_03_BLO', 'BWP': 'BWP', 'SBWP': 'SBWP', 'BLOK': 'BLOK', 'Luas_1': 'Luas_1', });
lyr_CAT_5.set('fieldAliases', {'NO': 'NO', 'NAMA': 'NAMA', 'PROVINSI': 'PROVINSI', 'KATEGORI': 'KATEGORI', 'LUAS': 'LUAS', 'Q1': 'Q1', 'Q2': 'Q2', });
lyr_CurahHujanTahunan_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'hujan': 'hujan', });
lyr_DAS_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', 'NAMA_DAS': 'NAMA_DAS', 'LUAS_HA': 'LUAS_HA', 'KEL_M': 'KEL_M', 'PRIORITAS_': 'PRIORITAS_', 'WIL_KERJA': 'WIL_KERJA', });
lyr_Litologi_8.set('fieldAliases', {'SIMBOL': 'SIMBOL', 'NAMA': 'NAMA', 'UMUR': 'UMUR', 'PULAU': 'PULAU', 'KODE_UNSUR': 'KODE_UNSUR', });
lyr_Geomorfologi_9.set('fieldAliases', {'REGIONAME': 'REGIONAME', 'UNITNAME': 'UNITNAME', });
lyr_HGU_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'penggunaan': 'penggunaan', 'desa': 'desa', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'status_1': 'status_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'hgu': 'hgu', });
lyr_ProduktivitasAkuifer_11.set('fieldAliases', {'HIDINDO_ID': 'HIDINDO_ID', 'PRODUK_AQ': 'PRODUK_AQ', 'KETERANGAN': 'KETERANGAN', 'LUAS': 'LUAS', });
lyr_RawanKarhutla_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_kab_be': 'FID_kab_be', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'BWP': 'BWP', 'raw_longso': 'raw_longso', 'raw_banjir': 'raw_banjir', 'raw_karhut': 'raw_karhut', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_HA': 'LUAS_HA', });
lyr_RawanBanjir_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_kab_be': 'FID_kab_be', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'BWP': 'BWP', 'raw_longso': 'raw_longso', 'raw_banjir': 'raw_banjir', 'raw_karhut': 'raw_karhut', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_HA': 'LUAS_HA', });
lyr_RawanLongsor_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_kab_be': 'FID_kab_be', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'BWP': 'BWP', 'raw_longso': 'raw_longso', 'raw_banjir': 'raw_banjir', 'raw_karhut': 'raw_karhut', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LUAS_HA': 'LUAS_HA', });
lyr_POLARUANGRTRWP_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'KODKWS': 'KODKWS', 'JNSRPR': 'JNSRPR', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'KKOP_1': 'KKOP_1', 'KP2B_2': 'KP2B_2', 'KRB_03': 'KRB_03', 'CAGBUD': 'CAGBUD', 'RESAIR': 'RESAIR', 'KSMPDN': 'KSMPDN', 'HANKAM': 'HANKAM', 'KKARST': 'KKARST', 'PTBGMB': 'PTBGMB', 'MGRSAT': 'MGRSAT', 'RDBUMI': 'RDBUMI', 'DLKPEL': 'DLKPEL', 'BPALUR': 'BPALUR', 'KPEKLT': 'KPEKLT', 'APKINT': 'APKINT', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KawasanHutan_16.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', });
lyr_BATASWILAYAHPERENCANAAN_17.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', });
lyr_BatasDesa_18.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_HGU_19.set('fieldAliases', {'objectid_1': 'objectid_1', 'objectid': 'objectid', 'penggunaan': 'penggunaan', 'desa': 'desa', 'kecamatan': 'kecamatan', 'kabupaten': 'kabupaten', 'provinsi': 'provinsi', 'status_1': 'status_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_JaringanJalan_20.set('fieldAliases', {'Name': 'Name', 'Descriptio': 'Descriptio', 'KETERANGAN': 'KETERANGAN', 'FUNGSI': 'FUNGSI', });
lyr_JARINGAN_LISTRIK_WP_21.set('fieldAliases', {'globalid': 'globalid', 'classifica': 'classifica', });
lyr_Pembangkitlistrik_22.set('fieldAliases', {'Id': 'Id', 'keterangan': 'keterangan', });
lyr_BTS_23.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', });
lyr_SPAM_24.set('fieldAliases', {'SUMBER': 'SUMBER', 'Keterangan': 'Keterangan', });
lyr_HAT_25.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'METODUKUR': 'METODUKUR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PLBN_26.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'thn_data': 'thn_data', 'namobj': 'namobj', 'desa_kel': 'desa_kel', 'kab_kot': 'kab_kot', 'propinsi': 'propinsi', 'jns_infr': 'jns_infr', 'kecamatan': 'kecamatan', 'thn_bangun': 'thn_bangun', });
lyr_VIDEO_DRONE_27.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'video': 'video', 'LOKASI': 'LOKASI', });
lyr_KesesuaianPengembanganWilayahSMCA_28.set('fieldAliases', {'slope': 'slope', 'LONGSOR': 'LONGSOR', 'TSUNAMI': 'TSUNAMI', 'KAW_HTN': 'KAW_HTN', 'BANJIR': 'BANJIR', 'SMCA': 'SMCA', });
lyr_FungsiPendidikan_29.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_FungsiPertahanandanKeamanan_30.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_FungsiKesehatan_31.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_FungsiPemerintahan_32.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_FungsiPerdagangandanJasa_33.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_TOPONIMI_34.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_analisis_jangkauan_sinyal_35.set('fieldAliases', {'sinyal': 'sinyal', });
lyr_PolaRuang_36.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'ket': 'Subzona', 'KODE_SBZN': 'Kode subzona', 'zona': 'Zona', });
lyr_SWP_BLOK_37.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', });
lyr_POLARUANGRDTR2019_4.set('fieldImages', {'FID_18_POL': 'TextEdit', 'Zona_1': 'TextEdit', 'Zona_2': 'TextEdit', 'Kode_Z2': 'TextEdit', 'Zona_3': 'TextEdit', 'Kode_Z3': 'TextEdit', 'SUMBER': 'TextEdit', 'luas': 'TextEdit', 'FID_03_BLO': 'TextEdit', 'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'BLOK': 'TextEdit', 'Luas_1': 'TextEdit', });
lyr_CAT_5.set('fieldImages', {'NO': 'TextEdit', 'NAMA': 'TextEdit', 'PROVINSI': 'TextEdit', 'KATEGORI': 'TextEdit', 'LUAS': 'TextEdit', 'Q1': 'TextEdit', 'Q2': 'TextEdit', });
lyr_CurahHujanTahunan_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'hujan': 'TextEdit', });
lyr_DAS_7.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'NAMA_DAS': 'TextEdit', 'LUAS_HA': 'TextEdit', 'KEL_M': 'TextEdit', 'PRIORITAS_': 'TextEdit', 'WIL_KERJA': 'TextEdit', });
lyr_Litologi_8.set('fieldImages', {'SIMBOL': 'TextEdit', 'NAMA': 'TextEdit', 'UMUR': 'TextEdit', 'PULAU': 'TextEdit', 'KODE_UNSUR': 'TextEdit', });
lyr_Geomorfologi_9.set('fieldImages', {'REGIONAME': 'TextEdit', 'UNITNAME': 'TextEdit', });
lyr_HGU_10.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'objectid_2': 'TextEdit', 'objectid': 'TextEdit', 'penggunaan': 'TextEdit', 'desa': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'status_1': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'hgu': 'TextEdit', });
lyr_ProduktivitasAkuifer_11.set('fieldImages', {'HIDINDO_ID': 'TextEdit', 'PRODUK_AQ': 'TextEdit', 'KETERANGAN': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_RawanKarhutla_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_kab_be': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'BWP': 'TextEdit', 'raw_longso': 'TextEdit', 'raw_banjir': 'TextEdit', 'raw_karhut': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_RawanBanjir_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_kab_be': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'BWP': 'TextEdit', 'raw_longso': 'TextEdit', 'raw_banjir': 'TextEdit', 'raw_karhut': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_RawanLongsor_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_kab_be': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'BWP': 'TextEdit', 'raw_longso': 'TextEdit', 'raw_banjir': 'TextEdit', 'raw_karhut': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_POLARUANGRTRWP_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'KODKWS': 'TextEdit', 'JNSRPR': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'KKOP_1': 'TextEdit', 'KP2B_2': 'TextEdit', 'KRB_03': 'TextEdit', 'CAGBUD': 'TextEdit', 'RESAIR': 'TextEdit', 'KSMPDN': 'TextEdit', 'HANKAM': 'TextEdit', 'KKARST': 'TextEdit', 'PTBGMB': 'TextEdit', 'MGRSAT': 'TextEdit', 'RDBUMI': 'TextEdit', 'DLKPEL': 'TextEdit', 'BPALUR': 'TextEdit', 'KPEKLT': 'TextEdit', 'APKINT': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KawasanHutan_16.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', });
lyr_BATASWILAYAHPERENCANAAN_17.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'FID_Batas_': '', 'WADMKC': '', 'WADMKK': '', 'BLOK': '', 'luas_ha': '', });
lyr_BatasDesa_18.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_HGU_19.set('fieldImages', {'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'penggunaan': 'TextEdit', 'desa': 'TextEdit', 'kecamatan': 'TextEdit', 'kabupaten': 'TextEdit', 'provinsi': 'TextEdit', 'status_1': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_JaringanJalan_20.set('fieldImages', {'Name': 'TextEdit', 'Descriptio': 'TextEdit', 'KETERANGAN': 'TextEdit', 'FUNGSI': 'TextEdit', });
lyr_JARINGAN_LISTRIK_WP_21.set('fieldImages', {'globalid': 'TextEdit', 'classifica': 'TextEdit', });
lyr_Pembangkitlistrik_22.set('fieldImages', {'Id': '', 'keterangan': '', });
lyr_BTS_23.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_SPAM_24.set('fieldImages', {'SUMBER': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_HAT_25.set('fieldImages', {'OBJECTID': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'SUMBERGEOM': 'TextEdit', 'ALATUKUR': 'TextEdit', 'METODUKUR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PLBN_26.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': '', 'thn_data': 'TextEdit', 'namobj': 'TextEdit', 'desa_kel': 'TextEdit', 'kab_kot': 'TextEdit', 'propinsi': 'TextEdit', 'jns_infr': 'TextEdit', 'kecamatan': 'TextEdit', 'thn_bangun': 'TextEdit', });
lyr_VIDEO_DRONE_27.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': 'TextEdit', 'video': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_KesesuaianPengembanganWilayahSMCA_28.set('fieldImages', {'slope': 'TextEdit', 'LONGSOR': 'TextEdit', 'TSUNAMI': 'TextEdit', 'KAW_HTN': 'TextEdit', 'BANJIR': 'TextEdit', 'SMCA': 'TextEdit', });
lyr_FungsiPendidikan_29.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_FungsiPertahanandanKeamanan_30.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_FungsiKesehatan_31.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_FungsiPemerintahan_32.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_FungsiPerdagangandanJasa_33.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_TOPONIMI_34.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', });
lyr_analisis_jangkauan_sinyal_35.set('fieldImages', {'sinyal': 'TextEdit', });
lyr_PolaRuang_36.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'ket': 'TextEdit', 'KODE_SBZN': 'TextEdit', 'zona': 'TextEdit', });
lyr_SWP_BLOK_37.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_POLARUANGRDTR2019_4.set('fieldLabels', {'FID_18_POL': 'inline label - always visible', 'Zona_1': 'inline label - always visible', 'Zona_2': 'inline label - always visible', 'Kode_Z2': 'inline label - always visible', 'Zona_3': 'inline label - always visible', 'Kode_Z3': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'luas': 'inline label - always visible', 'FID_03_BLO': 'inline label - always visible', 'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'Luas_1': 'inline label - always visible', });
lyr_CAT_5.set('fieldLabels', {'NO': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', 'KATEGORI': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Q1': 'inline label - always visible', 'Q2': 'inline label - always visible', });
lyr_CurahHujanTahunan_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'Id': 'inline label - always visible', 'gridcode': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'hujan': 'inline label - always visible', });
lyr_DAS_7.set('fieldLabels', {'NAME': 'inline label - always visible', 'LAYER': 'inline label - always visible', 'KML_STYLE': 'inline label - visible with data', 'KML_FOLDER': 'inline label - always visible', 'NAMA_DAS': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', 'KEL_M': 'inline label - always visible', 'PRIORITAS_': 'inline label - always visible', 'WIL_KERJA': 'inline label - visible with data', });
lyr_Litologi_8.set('fieldLabels', {'SIMBOL': 'inline label - always visible', 'NAMA': 'inline label - always visible', 'UMUR': 'inline label - always visible', 'PULAU': 'inline label - always visible', 'KODE_UNSUR': 'inline label - visible with data', });
lyr_Geomorfologi_9.set('fieldLabels', {'REGIONAME': 'inline label - always visible', 'UNITNAME': 'inline label - always visible', });
lyr_HGU_10.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'objectid_2': 'inline label - always visible', 'objectid': 'inline label - always visible', 'penggunaan': 'inline label - always visible', 'desa': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'kabupaten': 'inline label - always visible', 'provinsi': 'inline label - always visible', 'status_1': 'inline label - always visible', 'st_area_sh': 'inline label - always visible', 'st_length_': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'hgu': 'inline label - always visible', });
lyr_ProduktivitasAkuifer_11.set('fieldLabels', {'HIDINDO_ID': 'inline label - always visible', 'PRODUK_AQ': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'LUAS': 'inline label - always visible', });
lyr_RawanKarhutla_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_kab_be': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BWP': 'inline label - always visible', 'raw_longso': 'inline label - always visible', 'raw_banjir': 'inline label - always visible', 'raw_karhut': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', });
lyr_RawanBanjir_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_kab_be': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BWP': 'inline label - always visible', 'raw_longso': 'inline label - always visible', 'raw_banjir': 'inline label - always visible', 'raw_karhut': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', });
lyr_RawanLongsor_14.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'FID_kab_be': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BWP': 'inline label - always visible', 'raw_longso': 'inline label - always visible', 'raw_banjir': 'inline label - always visible', 'raw_karhut': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', 'LUAS_HA': 'inline label - always visible', });
lyr_POLARUANGRTRWP_15.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'KODKWS': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'KP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'DLKPEL': 'inline label - always visible', 'BPALUR': 'inline label - always visible', 'KPEKLT': 'inline label - always visible', 'APKINT': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'SHAPE_Leng': 'header label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_KawasanHutan_16.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', });
lyr_BATASWILAYAHPERENCANAAN_17.set('fieldLabels', {'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'no label', 'luas_ha': 'no label', });
lyr_BatasDesa_18.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_HGU_19.set('fieldLabels', {'objectid_1': 'inline label - always visible', 'objectid': 'inline label - always visible', 'penggunaan': 'inline label - always visible', 'desa': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'kabupaten': 'inline label - always visible', 'provinsi': 'inline label - always visible', 'status_1': 'inline label - always visible', 'st_area_sh': 'inline label - always visible', 'st_length_': 'inline label - always visible', });
lyr_JaringanJalan_20.set('fieldLabels', {'Name': 'inline label - always visible', 'Descriptio': 'inline label - always visible', 'KETERANGAN': 'inline label - always visible', 'FUNGSI': 'inline label - always visible', });
lyr_JARINGAN_LISTRIK_WP_21.set('fieldLabels', {'globalid': 'inline label - always visible', 'classifica': 'inline label - always visible', });
lyr_Pembangkitlistrik_22.set('fieldLabels', {'Id': 'inline label - always visible', 'keterangan': 'inline label - always visible', });
lyr_BTS_23.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_SPAM_24.set('fieldLabels', {'SUMBER': 'inline label - always visible', 'Keterangan': 'inline label - always visible', });
lyr_HAT_25.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KELURAHAN': 'inline label - always visible', 'TIPEHAK': 'inline label - always visible', 'TIPEPRODUK': 'inline label - always visible', 'TAHUN': 'inline label - always visible', 'NIB': 'inline label - always visible', 'LUASTERTUL': 'inline label - always visible', 'LUASPETA': 'inline label - always visible', 'SUMBERGEOM': 'inline label - always visible', 'ALATUKUR': 'inline label - always visible', 'METODUKUR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_PLBN_26.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'header label - always visible', 'thn_data': 'inline label - always visible', 'namobj': 'inline label - always visible', 'desa_kel': 'inline label - always visible', 'kab_kot': 'inline label - always visible', 'propinsi': 'inline label - always visible', 'jns_infr': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'thn_bangun': 'inline label - always visible', });
lyr_VIDEO_DRONE_27.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'video': 'inline label - always visible', 'LOKASI': 'no label', });
lyr_KesesuaianPengembanganWilayahSMCA_28.set('fieldLabels', {'slope': 'inline label - always visible', 'LONGSOR': 'inline label - always visible', 'TSUNAMI': 'inline label - always visible', 'KAW_HTN': 'inline label - always visible', 'BANJIR': 'inline label - always visible', 'SMCA': 'inline label - always visible', });
lyr_FungsiPendidikan_29.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_FungsiPertahanandanKeamanan_30.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_FungsiKesehatan_31.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_FungsiPemerintahan_32.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_FungsiPerdagangandanJasa_33.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_TOPONIMI_34.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_analisis_jangkauan_sinyal_35.set('fieldLabels', {'sinyal': 'inline label - always visible', });
lyr_PolaRuang_36.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'ket': 'inline label - always visible', 'KODE_SBZN': 'inline label - always visible', 'zona': 'inline label - always visible', });
lyr_SWP_BLOK_37.set('fieldLabels', {'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'luas_ha': 'inline label - always visible', });
lyr_SWP_BLOK_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

var layersList = [
new ol.layer.Group({
            title: 'Basemap',
			    fold: 'close',
            layers: [
lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,
]}),
 
new ol.layer.Group({
            title: 'Tematik',
			    fold: 'close',
            layers: [
lyr_CAT_5, lyr_CurahHujanTahunan_6, lyr_DAS_7, lyr_Litologi_8, lyr_Geomorfologi_9, lyr_HGU_10, lyr_ProduktivitasAkuifer_11, lyr_WILAYAHKETINGGIAN_2, lyr_Slope_3,
]}),

new ol.layer.Group({
            title: 'RTRW',
			    fold: 'close',
            layers: [
lyr_POLARUANGRTRWP_15, lyr_POLARUANGRDTR2019_4,
]}),

new ol.layer.Group({
            title: 'Status Lahan',
			    fold: 'close',
            layers: [
lyr_KawasanHutan_16, lyr_HGU_19, lyr_HAT_25,
]}),

new ol.layer.Group({
            title: 'Analisis',
			    fold: 'close',
            layers: [
lyr_KesesuaianPengembanganWilayahSMCA_28, 
]}),

new ol.layer.Group({
            title: 'Kebencanaan',
			    fold: 'close',
            layers: [
lyr_RawanBanjir_13, lyr_RawanKarhutla_12, lyr_RawanLongsor_14,
]}),

new ol.layer.Group({
            title: 'Infrastruktur',
			    fold: 'close',
            layers: [
lyr_JARINGAN_LISTRIK_WP_21, lyr_Pembangkitlistrik_22, lyr_BTS_23, lyr_SPAM_24,
]}),

new ol.layer.Group({
            title: 'peta dasar',
            fold: 'close',
            layers: [
lyr_BATASWILAYAHPERENCANAAN_17, lyr_FungsiPendidikan_29, lyr_FungsiPertahanandanKeamanan_30, lyr_FungsiKesehatan_31, lyr_FungsiPemerintahan_32, lyr_FungsiPerdagangandanJasa_33, lyr_TOPONIMI_34,lyr_BatasDesa_18, lyr_JaringanJalan_20, lyr_PLBN_26, lyr_VIDEO_DRONE_27,
]}),

new ol.layer.Group({
            title: 'konsep rencana',
            fold: 'open',
            layers: [
lyr_PolaRuang_36,lyr_SWP_BLOK_37,
]}),
];