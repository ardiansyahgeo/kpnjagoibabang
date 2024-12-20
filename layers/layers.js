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
var format_KONSEPPOLARUANG_2 = new ol.format.GeoJSON();
var features_KONSEPPOLARUANG_2 = format_KONSEPPOLARUANG_2.readFeatures(json_KONSEPPOLARUANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONSEPPOLARUANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONSEPPOLARUANG_2.addFeatures(features_KONSEPPOLARUANG_2);
var lyr_KONSEPPOLARUANG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONSEPPOLARUANG_2, 
                style: style_KONSEPPOLARUANG_2,
                popuplayertitle: "KONSEP POLA RUANG",
                interactive: true,
    title: 'KONSEP POLA RUANG<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_2.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_3.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_4.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_5.png" /> Pariwisata<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_6.png" /> Pemakaman<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_7.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_8.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_9.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_10.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_11.png" /> Perkantoran<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_12.png" /> Perkebunan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_13.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_14.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_15.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_16.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_17.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_18.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_19.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_20.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_21.png" /> SPU Skala RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_22.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_23.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_24.png" /> Taman Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_25.png" /> Taman RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_26.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_27.png" /> Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/KONSEPPOLARUANG_2_28.png" /> SPU Skala Kota<br />'
        });
var format_Infrastrukturtransportasi_3 = new ol.format.GeoJSON();
var features_Infrastrukturtransportasi_3 = format_Infrastrukturtransportasi_3.readFeatures(json_Infrastrukturtransportasi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastrukturtransportasi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastrukturtransportasi_3.addFeatures(features_Infrastrukturtransportasi_3);
var lyr_Infrastrukturtransportasi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastrukturtransportasi_3, 
                style: style_Infrastrukturtransportasi_3,
                popuplayertitle: "Infrastruktur transportasi",
                interactive: true,
    title: 'Infrastruktur transportasi<br />\
    <img src="styles/legend/Infrastrukturtransportasi_3_0.png" /> Halte<br />\
    <img src="styles/legend/Infrastrukturtransportasi_3_1.png" /> Jembatan<br />\
    <img src="styles/legend/Infrastrukturtransportasi_3_2.png" /> Terminal Barang<br />\
    <img src="styles/legend/Infrastrukturtransportasi_3_3.png" /> Terminal Penumpang Tipe A<br />'
        });
var format_JaringanTransportasi_4 = new ol.format.GeoJSON();
var features_JaringanTransportasi_4 = format_JaringanTransportasi_4.readFeatures(json_JaringanTransportasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasi_4.addFeatures(features_JaringanTransportasi_4);
var lyr_JaringanTransportasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTransportasi_4, 
                style: style_JaringanTransportasi_4,
                popuplayertitle: "Jaringan Transportasi",
                interactive: true,
    title: 'Jaringan Transportasi<br />\
    <img src="styles/legend/JaringanTransportasi_4_0.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JaringanTransportasi_4_1.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/JaringanTransportasi_4_2.png" /> Jalan Lokal Sekunder<br />\
    <img src="styles/legend/JaringanTransportasi_4_3.png" /> Jalan Lingkungan Primer<br />'
        });
var format_infrastrukturairminum_5 = new ol.format.GeoJSON();
var features_infrastrukturairminum_5 = format_infrastrukturairminum_5.readFeatures(json_infrastrukturairminum_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_infrastrukturairminum_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastrukturairminum_5.addFeatures(features_infrastrukturairminum_5);
var lyr_infrastrukturairminum_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infrastrukturairminum_5, 
                style: style_infrastrukturairminum_5,
                popuplayertitle: "infrastruktur air minum",
                interactive: true,
    title: 'infrastruktur air minum<br />\
    <img src="styles/legend/infrastrukturairminum_5_0.png" /> Bangunan Penampung Air<br />\
    <img src="styles/legend/infrastrukturairminum_5_1.png" /> Instalasi Produksi<br />'
        });
var format_jaringanairminum_6 = new ol.format.GeoJSON();
var features_jaringanairminum_6 = format_jaringanairminum_6.readFeatures(json_jaringanairminum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringanairminum_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringanairminum_6.addFeatures(features_jaringanairminum_6);
var lyr_jaringanairminum_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringanairminum_6, 
                style: style_jaringanairminum_6,
                popuplayertitle: "jaringan air minum",
                interactive: true,
    title: 'jaringan air minum<br />\
    <img src="styles/legend/jaringanairminum_6_0.png" /> Jaringan Distribusi Pembagi<br />\
    <img src="styles/legend/jaringanairminum_6_1.png" /> Jaringan Transmisi Air Minum<br />'
        });
var format_Limbah_7 = new ol.format.GeoJSON();
var features_Limbah_7 = format_Limbah_7.readFeatures(json_Limbah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limbah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limbah_7.addFeatures(features_Limbah_7);
var lyr_Limbah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limbah_7, 
                style: style_Limbah_7,
                popuplayertitle: "Limbah",
                interactive: true,
    title: 'Limbah<br />\
    <img src="styles/legend/Limbah_7_0.png" /> Sub-sistem Pengolahan Lumpur Tinja<br />'
        });
var format_JaringanDrainase_8 = new ol.format.GeoJSON();
var features_JaringanDrainase_8 = format_JaringanDrainase_8.readFeatures(json_JaringanDrainase_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanDrainase_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanDrainase_8.addFeatures(features_JaringanDrainase_8);
var lyr_JaringanDrainase_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanDrainase_8, 
                style: style_JaringanDrainase_8,
                popuplayertitle: "Jaringan Drainase",
                interactive: true,
    title: 'Jaringan Drainase<br />\
    <img src="styles/legend/JaringanDrainase_8_0.png" /> Rencana Jaringan Drainase Primer<br />\
    <img src="styles/legend/JaringanDrainase_8_1.png" /> Rencana Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_8_2.png" /> Rencana Jaringan Drainase Tersier<br />\
    <img src="styles/legend/JaringanDrainase_8_3.png" /> Rencana Jaringan Drainase Lokal<br />'
        });
var format_InfrastrukturDrainase_9 = new ol.format.GeoJSON();
var features_InfrastrukturDrainase_9 = format_InfrastrukturDrainase_9.readFeatures(json_InfrastrukturDrainase_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturDrainase_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturDrainase_9.addFeatures(features_InfrastrukturDrainase_9);
var lyr_InfrastrukturDrainase_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturDrainase_9, 
                style: style_InfrastrukturDrainase_9,
                popuplayertitle: "Infrastruktur Drainase",
                interactive: true,
    title: 'Infrastruktur Drainase<br />\
    <img src="styles/legend/InfrastrukturDrainase_9_0.png" /> Bangunan Tampungan (Polder)<br />'
        });
var format_JaringanEnergi_10 = new ol.format.GeoJSON();
var features_JaringanEnergi_10 = format_JaringanEnergi_10.readFeatures(json_JaringanEnergi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanEnergi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanEnergi_10.addFeatures(features_JaringanEnergi_10);
var lyr_JaringanEnergi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanEnergi_10, 
                style: style_JaringanEnergi_10,
                popuplayertitle: "Jaringan Energi",
                interactive: true,
    title: 'Jaringan Energi<br />\
    <img src="styles/legend/JaringanEnergi_10_0.png" /> Saluran Udara Tegangan Ekstra Tinggi (SUTET)<br />\
    <img src="styles/legend/JaringanEnergi_10_1.png" /> Saluran Udara Tegangan Menengah (SUTM)<br />'
        });
var format_InfrastrukturEnergi_11 = new ol.format.GeoJSON();
var features_InfrastrukturEnergi_11 = format_InfrastrukturEnergi_11.readFeatures(json_InfrastrukturEnergi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturEnergi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturEnergi_11.addFeatures(features_InfrastrukturEnergi_11);
var lyr_InfrastrukturEnergi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturEnergi_11, 
                style: style_InfrastrukturEnergi_11,
                popuplayertitle: "Infrastruktur Energi",
                interactive: true,
    title: 'Infrastruktur Energi<br />\
    <img src="styles/legend/InfrastrukturEnergi_11_0.png" /> Pembangkit Listrik Tenaga Surya (PLTS)<br />'
        });
var format_InfrastukturTelekomunikasi_12 = new ol.format.GeoJSON();
var features_InfrastukturTelekomunikasi_12 = format_InfrastukturTelekomunikasi_12.readFeatures(json_InfrastukturTelekomunikasi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastukturTelekomunikasi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastukturTelekomunikasi_12.addFeatures(features_InfrastukturTelekomunikasi_12);
var lyr_InfrastukturTelekomunikasi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastukturTelekomunikasi_12, 
                style: style_InfrastukturTelekomunikasi_12,
                popuplayertitle: "Infrastuktur Telekomunikasi",
                interactive: true,
    title: 'Infrastuktur Telekomunikasi<br />\
    <img src="styles/legend/InfrastukturTelekomunikasi_12_0.png" /> Menara Base Transceiver Station (BTS)<br />'
        });
var format_InfrastrukturPersampahan_13 = new ol.format.GeoJSON();
var features_InfrastrukturPersampahan_13 = format_InfrastrukturPersampahan_13.readFeatures(json_InfrastrukturPersampahan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPersampahan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPersampahan_13.addFeatures(features_InfrastrukturPersampahan_13);
var lyr_InfrastrukturPersampahan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturPersampahan_13, 
                style: style_InfrastrukturPersampahan_13,
                popuplayertitle: "Infrastruktur Persampahan",
                interactive: true,
    title: 'Infrastruktur Persampahan<br />\
    <img src="styles/legend/InfrastrukturPersampahan_13_0.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />'
        });
var format_JaringanPrasaranaLainnya_14 = new ol.format.GeoJSON();
var features_JaringanPrasaranaLainnya_14 = format_JaringanPrasaranaLainnya_14.readFeatures(json_JaringanPrasaranaLainnya_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPrasaranaLainnya_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPrasaranaLainnya_14.addFeatures(features_JaringanPrasaranaLainnya_14);
var lyr_JaringanPrasaranaLainnya_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanPrasaranaLainnya_14, 
                style: style_JaringanPrasaranaLainnya_14,
                popuplayertitle: "Jaringan Prasarana Lainnya",
                interactive: true,
    title: 'Jaringan Prasarana Lainnya<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_14_0.png" /> Garis Batas Negara<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_14_1.png" /> Jalur Evakuasi Bencana<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_14_2.png" /> Jalur Inspeksi dan Patroli Perbatasan<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_14_3.png" /> Jaringan Pejalan Kaki<br />'
        });
var format_InfrastrukturPrasaranaLainnya_15 = new ol.format.GeoJSON();
var features_InfrastrukturPrasaranaLainnya_15 = format_InfrastrukturPrasaranaLainnya_15.readFeatures(json_InfrastrukturPrasaranaLainnya_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPrasaranaLainnya_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPrasaranaLainnya_15.addFeatures(features_InfrastrukturPrasaranaLainnya_15);
var lyr_InfrastrukturPrasaranaLainnya_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturPrasaranaLainnya_15, 
                style: style_InfrastrukturPrasaranaLainnya_15,
                popuplayertitle: "Infrastruktur Prasarana Lainnya",
                interactive: true,
    title: 'Infrastruktur Prasarana Lainnya<br />\
    <img src="styles/legend/InfrastrukturPrasaranaLainnya_15_0.png" /> Pos Pengamanan Perbatasan<br />\
    <img src="styles/legend/InfrastrukturPrasaranaLainnya_15_1.png" /> Tempat Evakuasi Akhir (TEA)<br />\
    <img src="styles/legend/InfrastrukturPrasaranaLainnya_15_2.png" /> Tempat Evakuasi Sementara (TES)<br />'
        });
var format_PusatPelayanan_16 = new ol.format.GeoJSON();
var features_PusatPelayanan_16 = format_PusatPelayanan_16.readFeatures(json_PusatPelayanan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PusatPelayanan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PusatPelayanan_16.addFeatures(features_PusatPelayanan_16);
var lyr_PusatPelayanan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PusatPelayanan_16, 
                style: style_PusatPelayanan_16,
                popuplayertitle: "Pusat Pelayanan",
                interactive: true,
    title: 'Pusat Pelayanan<br />\
    <img src="styles/legend/PusatPelayanan_16_0.png" /> Pusat Pelayanan Kota/Kawasan Perkotaan<br />\
    <img src="styles/legend/PusatPelayanan_16_1.png" /> Sub Pusat Pelayanan Kota/Kawasan Perkotaan<br />\
    <img src="styles/legend/PusatPelayanan_16_2.png" /> Pusat Lingkungan Kelurahan/Desa<br />'
        });
var format_SWP_BLOK_17 = new ol.format.GeoJSON();
var features_SWP_BLOK_17 = format_SWP_BLOK_17.readFeatures(json_SWP_BLOK_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWP_BLOK_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWP_BLOK_17.addFeatures(features_SWP_BLOK_17);
var lyr_SWP_BLOK_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWP_BLOK_17, 
                style: style_SWP_BLOK_17,
                popuplayertitle: "SWP_BLOK",
                interactive: true,
                title: '<img src="styles/legend/SWP_BLOK_17.png" /> SWP_BLOK'
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
var format_TOPONIMI_19 = new ol.format.GeoJSON();
var features_TOPONIMI_19 = format_TOPONIMI_19.readFeatures(json_TOPONIMI_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_19.addFeatures(features_TOPONIMI_19);
var lyr_TOPONIMI_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_19,
maxResolution:1.4002233076130983,
 
                style: style_TOPONIMI_19,
                popuplayertitle: "TOPONIMI",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_19.png" /> TOPONIMI'
            });
var format_VIDEO_DRONE_20 = new ol.format.GeoJSON();
var features_VIDEO_DRONE_20 = format_VIDEO_DRONE_20.readFeatures(json_VIDEO_DRONE_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIDEO_DRONE_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIDEO_DRONE_20.addFeatures(features_VIDEO_DRONE_20);
var lyr_VIDEO_DRONE_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIDEO_DRONE_20, 
                style: style_VIDEO_DRONE_20,
                popuplayertitle: "VIDEO_DRONE",
                interactive: true,
                title: '<img src="styles/legend/VIDEO_DRONE_20.png" /> VIDEO_DRONE'
            });
var group_PusatPelayanan = new ol.layer.Group({
                                layers: [lyr_PusatPelayanan_16,],
                                fold: "close",
                                title: "Pusat Pelayanan"});
var group_PrasaranaLainnya = new ol.layer.Group({
                                layers: [lyr_JaringanPrasaranaLainnya_14,lyr_InfrastrukturPrasaranaLainnya_15,],
                                fold: "close",
                                title: "Prasarana Lainnya"});
var group_Persampahan = new ol.layer.Group({
                                layers: [lyr_InfrastrukturPersampahan_13,],
                                fold: "close",
                                title: "Persampahan"});
var group_Telekomunikasi = new ol.layer.Group({
                                layers: [lyr_InfrastukturTelekomunikasi_12,],
                                fold: "close",
                                title: "Telekomunikasi"});
var group_Energi = new ol.layer.Group({
                                layers: [lyr_JaringanEnergi_10,lyr_InfrastrukturEnergi_11,],
                                fold: "close",
                                title: "Energi"});
var group_Drainase = new ol.layer.Group({
                                layers: [lyr_JaringanDrainase_8,lyr_InfrastrukturDrainase_9,],
                                fold: "close",
                                title: "Drainase"});
var group_Limbah = new ol.layer.Group({
                                layers: [lyr_Limbah_7,],
                                fold: "close",
                                title: "Limbah"});
var group_AirMinum = new ol.layer.Group({
                                layers: [lyr_infrastrukturairminum_5,lyr_jaringanairminum_6,],
                                fold: "close",
                                title: "Air Minum"});
var group_Transportasi = new ol.layer.Group({
                                layers: [lyr_Infrastrukturtransportasi_3,lyr_JaringanTransportasi_4,],
                                fold: "close",
                                title: "Transportasi"});
var group_KonsepPolaRuang = new ol.layer.Group({
                                layers: [lyr_KONSEPPOLARUANG_2,],
                                fold: "open",
                                title: "Konsep Pola Ruang"});
var group_ANALISIS = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: "ANALISIS"});
var group_STATUSLAHAN = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: "STATUS LAHAN"});
var group_KEBENCANAAN = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: "KEBENCANAAN"});
var group_LINGKUNGANFISIK = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: "LINGKUNGAN FISIK"});
var group_TATARUANG = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: "TATARUANG"});

lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_KONSEPPOLARUANG_2.setVisible(true);lyr_Infrastrukturtransportasi_3.setVisible(false);lyr_JaringanTransportasi_4.setVisible(false);lyr_infrastrukturairminum_5.setVisible(false);lyr_jaringanairminum_6.setVisible(false);lyr_Limbah_7.setVisible(false);lyr_JaringanDrainase_8.setVisible(false);lyr_InfrastrukturDrainase_9.setVisible(false);lyr_JaringanEnergi_10.setVisible(false);lyr_InfrastrukturEnergi_11.setVisible(false);lyr_InfrastukturTelekomunikasi_12.setVisible(false);lyr_InfrastrukturPersampahan_13.setVisible(false);lyr_JaringanPrasaranaLainnya_14.setVisible(false);lyr_InfrastrukturPrasaranaLainnya_15.setVisible(false);lyr_PusatPelayanan_16.setVisible(false);lyr_SWP_BLOK_17.setVisible(true);lyr_BatasDesa_18.setVisible(true);lyr_TOPONIMI_19.setVisible(true);lyr_VIDEO_DRONE_20.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,group_KonsepPolaRuang,group_Transportasi,group_AirMinum,group_Limbah,group_Drainase,group_Energi,group_Telekomunikasi,group_Persampahan,group_PrasaranaLainnya,group_PusatPelayanan,lyr_SWP_BLOK_17,lyr_BatasDesa_18,lyr_TOPONIMI_19,lyr_VIDEO_DRONE_20];
lyr_KONSEPPOLARUANG_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Infrastrukturtransportasi_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanTransportasi_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_infrastrukturairminum_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_jaringanairminum_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_Limbah_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanDrainase_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturDrainase_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanEnergi_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturEnergi_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_InfrastukturTelekomunikasi_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_InfrastrukturPersampahan_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanPrasaranaLainnya_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturPrasaranaLainnya_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PusatPelayanan_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_SWP_BLOK_17.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', });
lyr_BatasDesa_18.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_TOPONIMI_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_VIDEO_DRONE_20.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'video': 'video', 'LOKASI': 'LOKASI', });
lyr_KONSEPPOLARUANG_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Infrastrukturtransportasi_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanTransportasi_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_infrastrukturairminum_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_jaringanairminum_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Limbah_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanDrainase_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturDrainase_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanEnergi_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturEnergi_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_InfrastukturTelekomunikasi_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_InfrastrukturPersampahan_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanPrasaranaLainnya_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturPrasaranaLainnya_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PusatPelayanan_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_SWP_BLOK_17.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_BatasDesa_18.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_TOPONIMI_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_VIDEO_DRONE_20.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': 'TextEdit', 'video': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_KONSEPPOLARUANG_2.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'NAMZON': 'inline label - always visible', 'KODZON': 'inline label - always visible', 'NAMSZN': 'inline label - always visible', 'KODSZN': 'inline label - always visible', 'JNSRPR': 'inline label - always visible', 'KODEWP': 'inline label - always visible', 'KODSWP': 'inline label - always visible', 'KODBLK': 'inline label - always visible', 'KODSBL': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'KKOP_1': 'inline label - always visible', 'LP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'TOD_04': 'inline label - always visible', 'TEB_05': 'inline label - always visible', 'PUSLIT': 'inline label - always visible', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'inline label - always visible', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'inline label - always visible', 'PTBGMB': 'inline label - always visible', 'MGRSAT': 'inline label - always visible', 'RDBUMI': 'inline label - always visible', 'TPZ_00': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Infrastrukturtransportasi_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanTransportasi_4.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_infrastrukturairminum_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_jaringanairminum_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_Limbah_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanDrainase_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_InfrastrukturDrainase_9.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanEnergi_10.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_InfrastrukturEnergi_11.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_InfrastukturTelekomunikasi_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_InfrastrukturPersampahan_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanPrasaranaLainnya_14.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_InfrastrukturPrasaranaLainnya_15.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_PusatPelayanan_16.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_SWP_BLOK_17.set('fieldLabels', {'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'luas_ha': 'inline label - always visible', });
lyr_BatasDesa_18.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_TOPONIMI_19.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_VIDEO_DRONE_20.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'video': 'inline label - always visible', 'LOKASI': 'inline label - always visible', });
lyr_VIDEO_DRONE_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});