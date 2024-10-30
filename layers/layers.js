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
var format_KawasanHutan_2 = new ol.format.GeoJSON();
var features_KawasanHutan_2 = format_KawasanHutan_2.readFeatures(json_KawasanHutan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanHutan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanHutan_2.addFeatures(features_KawasanHutan_2);
var lyr_KawasanHutan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KawasanHutan_2, 
                style: style_KawasanHutan_2,
                popuplayertitle: "Kawasan Hutan",
                interactive: true,
    title: 'Kawasan Hutan<br />\
    <img src="styles/legend/KawasanHutan_2_0.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KawasanHutan_2_1.png" /> Kawasan Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KawasanHutan_2_2.png" /> Kawasan Hutan Produksi yang dapat di Konversi<br />'
        });
var format_HAT_3 = new ol.format.GeoJSON();
var features_HAT_3 = format_HAT_3.readFeatures(json_HAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HAT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HAT_3.addFeatures(features_HAT_3);
var lyr_HAT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HAT_3, 
                style: style_HAT_3,
                popuplayertitle: "HAT",
                interactive: true,
    title: 'HAT<br />\
    <img src="styles/legend/HAT_3_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/HAT_3_1.png" /> Hak Milik<br />\
    <img src="styles/legend/HAT_3_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/HAT_3_3.png" /> Kosong<br />'
        });
var format_LP2B_4 = new ol.format.GeoJSON();
var features_LP2B_4 = format_LP2B_4.readFeatures(json_LP2B_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LP2B_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LP2B_4.addFeatures(features_LP2B_4);
var lyr_LP2B_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LP2B_4, 
                style: style_LP2B_4,
                popuplayertitle: "LP2B",
                interactive: true,
                title: '<img src="styles/legend/LP2B_4.png" /> LP2B'
            });
var format_KONSEPPOLARUANG_5 = new ol.format.GeoJSON();
var features_KONSEPPOLARUANG_5 = format_KONSEPPOLARUANG_5.readFeatures(json_KONSEPPOLARUANG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KONSEPPOLARUANG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KONSEPPOLARUANG_5.addFeatures(features_KONSEPPOLARUANG_5);
var lyr_KONSEPPOLARUANG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KONSEPPOLARUANG_5, 
                style: style_KONSEPPOLARUANG_5,
                popuplayertitle: "KONSEP POLA RUANG",
                interactive: true,
    title: 'KONSEP POLA RUANG<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_0.png" /> Badan Air<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_1.png" /> Badan Jalan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_2.png" /> Hutan Produksi Tetap<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_3.png" /> Instalasi Pengolahan Air Limbah (IPAL)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_4.png" /> Instalasi Pengolahan Air Minum (IPAM)<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_5.png" /> Pariwisata<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_6.png" /> Pemakaman<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_7.png" /> Pembangkitan Tenaga Listrik<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_8.png" /> Perdagangan dan Jasa Skala Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_9.png" /> Perdagangan dan Jasa Skala SWP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_10.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_11.png" /> Perkantoran<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_12.png" /> Perkebunan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_13.png" /> Perlindungan Setempat<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_14.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_15.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_16.png" /> Perumahan Kepadatan Sangat Rendah<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_17.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_18.png" /> Pos Lintas Batas Negara<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_19.png" /> SPU Skala Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_20.png" /> SPU Skala Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_21.png" /> SPU Skala RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_22.png" /> Taman Kecamatan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_23.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_24.png" /> Taman Kota<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_25.png" /> Taman RW<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_26.png" /> Tanaman Pangan<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_27.png" /> Ruang Terbuka Non Hijau<br />\
    <img src="styles/legend/KONSEPPOLARUANG_5_28.png" /> SPU Skala Kota<br />'
        });
var format_Infrastrukturtransportasi_6 = new ol.format.GeoJSON();
var features_Infrastrukturtransportasi_6 = format_Infrastrukturtransportasi_6.readFeatures(json_Infrastrukturtransportasi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastrukturtransportasi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastrukturtransportasi_6.addFeatures(features_Infrastrukturtransportasi_6);
var lyr_Infrastrukturtransportasi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastrukturtransportasi_6, 
                style: style_Infrastrukturtransportasi_6,
                popuplayertitle: "Infrastruktur transportasi",
                interactive: true,
    title: 'Infrastruktur transportasi<br />\
    <img src="styles/legend/Infrastrukturtransportasi_6_0.png" /> Halte<br />\
    <img src="styles/legend/Infrastrukturtransportasi_6_1.png" /> Jembatan<br />\
    <img src="styles/legend/Infrastrukturtransportasi_6_2.png" /> Terminal Barang<br />\
    <img src="styles/legend/Infrastrukturtransportasi_6_3.png" /> Terminal Penumpang Tipe A<br />'
        });
var format_JaringanTransportasi_7 = new ol.format.GeoJSON();
var features_JaringanTransportasi_7 = format_JaringanTransportasi_7.readFeatures(json_JaringanTransportasi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanTransportasi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanTransportasi_7.addFeatures(features_JaringanTransportasi_7);
var lyr_JaringanTransportasi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanTransportasi_7, 
                style: style_JaringanTransportasi_7,
                popuplayertitle: "Jaringan Transportasi",
                interactive: true,
    title: 'Jaringan Transportasi<br />\
    <img src="styles/legend/JaringanTransportasi_7_0.png" /> Jalan Kolektor Primer<br />\
    <img src="styles/legend/JaringanTransportasi_7_1.png" /> Jalan Lokal Primer<br />\
    <img src="styles/legend/JaringanTransportasi_7_2.png" /> Jalan Lokal Sekunder<br />'
        });
var format_infrastrukturairminum_8 = new ol.format.GeoJSON();
var features_infrastrukturairminum_8 = format_infrastrukturairminum_8.readFeatures(json_infrastrukturairminum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_infrastrukturairminum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_infrastrukturairminum_8.addFeatures(features_infrastrukturairminum_8);
var lyr_infrastrukturairminum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_infrastrukturairminum_8, 
                style: style_infrastrukturairminum_8,
                popuplayertitle: "infrastruktur air minum",
                interactive: true,
    title: 'infrastruktur air minum<br />\
    <img src="styles/legend/infrastrukturairminum_8_0.png" /> Bangunan Penampung Air<br />\
    <img src="styles/legend/infrastrukturairminum_8_1.png" /> Instalasi Produksi<br />'
        });
var format_jaringanairminum_9 = new ol.format.GeoJSON();
var features_jaringanairminum_9 = format_jaringanairminum_9.readFeatures(json_jaringanairminum_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringanairminum_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringanairminum_9.addFeatures(features_jaringanairminum_9);
var lyr_jaringanairminum_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringanairminum_9, 
                style: style_jaringanairminum_9,
                popuplayertitle: "jaringan air minum",
                interactive: true,
    title: 'jaringan air minum<br />\
    <img src="styles/legend/jaringanairminum_9_0.png" /> Jaringan Distribusi Pembagi<br />\
    <img src="styles/legend/jaringanairminum_9_1.png" /> Jaringan Transmisi Air Minum<br />'
        });
var format_Limbah_10 = new ol.format.GeoJSON();
var features_Limbah_10 = format_Limbah_10.readFeatures(json_Limbah_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limbah_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limbah_10.addFeatures(features_Limbah_10);
var lyr_Limbah_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limbah_10, 
                style: style_Limbah_10,
                popuplayertitle: "Limbah",
                interactive: true,
    title: 'Limbah<br />\
    <img src="styles/legend/Limbah_10_0.png" /> Sub-sistem Pengolahan Lumpur Tinja<br />'
        });
var format_JaringanDrainase_11 = new ol.format.GeoJSON();
var features_JaringanDrainase_11 = format_JaringanDrainase_11.readFeatures(json_JaringanDrainase_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanDrainase_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanDrainase_11.addFeatures(features_JaringanDrainase_11);
var lyr_JaringanDrainase_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanDrainase_11, 
                style: style_JaringanDrainase_11,
                popuplayertitle: "Jaringan Drainase",
                interactive: true,
    title: 'Jaringan Drainase<br />\
    <img src="styles/legend/JaringanDrainase_11_0.png" /> Rencana Jaringan Drainase Primer<br />\
    <img src="styles/legend/JaringanDrainase_11_1.png" /> Rencana Jaringan Drainase Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_11_2.png" /> Rencana Jaringan Drainase Tersier<br />\
    <img src="styles/legend/JaringanDrainase_11_3.png" /> Rencana Jaringan Drainase Lokal<br />'
        });
var format_InfrastrukturDrainase_12 = new ol.format.GeoJSON();
var features_InfrastrukturDrainase_12 = format_InfrastrukturDrainase_12.readFeatures(json_InfrastrukturDrainase_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturDrainase_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturDrainase_12.addFeatures(features_InfrastrukturDrainase_12);
var lyr_InfrastrukturDrainase_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturDrainase_12, 
                style: style_InfrastrukturDrainase_12,
                popuplayertitle: "Infrastruktur Drainase",
                interactive: true,
    title: 'Infrastruktur Drainase<br />\
    <img src="styles/legend/InfrastrukturDrainase_12_0.png" /> Bangunan Tampungan (Polder)<br />'
        });
var format_JaringanEnergi_13 = new ol.format.GeoJSON();
var features_JaringanEnergi_13 = format_JaringanEnergi_13.readFeatures(json_JaringanEnergi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanEnergi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanEnergi_13.addFeatures(features_JaringanEnergi_13);
var lyr_JaringanEnergi_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanEnergi_13, 
                style: style_JaringanEnergi_13,
                popuplayertitle: "Jaringan Energi",
                interactive: true,
    title: 'Jaringan Energi<br />\
    <img src="styles/legend/JaringanEnergi_13_0.png" /> Saluran Udara Tegangan Ekstra Tinggi (SUTET)<br />\
    <img src="styles/legend/JaringanEnergi_13_1.png" /> Saluran Udara Tegangan Menengah (SUTM)<br />'
        });
var format_InfrastrukturEnergi_14 = new ol.format.GeoJSON();
var features_InfrastrukturEnergi_14 = format_InfrastrukturEnergi_14.readFeatures(json_InfrastrukturEnergi_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturEnergi_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturEnergi_14.addFeatures(features_InfrastrukturEnergi_14);
var lyr_InfrastrukturEnergi_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturEnergi_14, 
                style: style_InfrastrukturEnergi_14,
                popuplayertitle: "Infrastruktur Energi",
                interactive: true,
    title: 'Infrastruktur Energi<br />\
    <img src="styles/legend/InfrastrukturEnergi_14_0.png" /> Pembangkit Listrik Tenaga Surya (PLTS)<br />'
        });
var format_InfrastukturTelekomunikasi_15 = new ol.format.GeoJSON();
var features_InfrastukturTelekomunikasi_15 = format_InfrastukturTelekomunikasi_15.readFeatures(json_InfrastukturTelekomunikasi_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastukturTelekomunikasi_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastukturTelekomunikasi_15.addFeatures(features_InfrastukturTelekomunikasi_15);
var lyr_InfrastukturTelekomunikasi_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastukturTelekomunikasi_15, 
                style: style_InfrastukturTelekomunikasi_15,
                popuplayertitle: "Infrastuktur Telekomunikasi",
                interactive: true,
    title: 'Infrastuktur Telekomunikasi<br />\
    <img src="styles/legend/InfrastukturTelekomunikasi_15_0.png" /> Menara Base Transceiver Station (BTS)<br />'
        });
var format_InfrastrukturPersampahan_16 = new ol.format.GeoJSON();
var features_InfrastrukturPersampahan_16 = format_InfrastrukturPersampahan_16.readFeatures(json_InfrastrukturPersampahan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPersampahan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPersampahan_16.addFeatures(features_InfrastrukturPersampahan_16);
var lyr_InfrastrukturPersampahan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturPersampahan_16, 
                style: style_InfrastrukturPersampahan_16,
                popuplayertitle: "Infrastruktur Persampahan",
                interactive: true,
    title: 'Infrastruktur Persampahan<br />\
    <img src="styles/legend/InfrastrukturPersampahan_16_0.png" /> Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)<br />'
        });
var format_JaringanPrasaranaLainnya_17 = new ol.format.GeoJSON();
var features_JaringanPrasaranaLainnya_17 = format_JaringanPrasaranaLainnya_17.readFeatures(json_JaringanPrasaranaLainnya_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPrasaranaLainnya_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPrasaranaLainnya_17.addFeatures(features_JaringanPrasaranaLainnya_17);
var lyr_JaringanPrasaranaLainnya_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanPrasaranaLainnya_17, 
                style: style_JaringanPrasaranaLainnya_17,
                popuplayertitle: "Jaringan Prasarana Lainnya",
                interactive: true,
    title: 'Jaringan Prasarana Lainnya<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_17_0.png" /> Garis Batas Negara<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_17_1.png" /> Jalur Evakuasi Bencana<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_17_2.png" /> Jalur Inspeksi dan Patroli Perbatasan<br />\
    <img src="styles/legend/JaringanPrasaranaLainnya_17_3.png" /> Jaringan Pejalan Kaki<br />'
        });
var format_InfrastrukturPrasaranaLainnya_18 = new ol.format.GeoJSON();
var features_InfrastrukturPrasaranaLainnya_18 = format_InfrastrukturPrasaranaLainnya_18.readFeatures(json_InfrastrukturPrasaranaLainnya_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InfrastrukturPrasaranaLainnya_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InfrastrukturPrasaranaLainnya_18.addFeatures(features_InfrastrukturPrasaranaLainnya_18);
var lyr_InfrastrukturPrasaranaLainnya_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InfrastrukturPrasaranaLainnya_18, 
                style: style_InfrastrukturPrasaranaLainnya_18,
                popuplayertitle: "Infrastruktur Prasarana Lainnya",
                interactive: true,
    title: 'Infrastruktur Prasarana Lainnya<br />\
    <img src="styles/legend/InfrastrukturPrasaranaLainnya_18_0.png" /> Pos Pengamanan Perbatasan<br />\
    <img src="styles/legend/InfrastrukturPrasaranaLainnya_18_1.png" /> Tempat Evakuasi Akhir (TEA)<br />\
    <img src="styles/legend/InfrastrukturPrasaranaLainnya_18_2.png" /> Tempat Evakuasi Sementara (TES)<br />'
        });
var format_PusatPelayanan_19 = new ol.format.GeoJSON();
var features_PusatPelayanan_19 = format_PusatPelayanan_19.readFeatures(json_PusatPelayanan_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PusatPelayanan_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PusatPelayanan_19.addFeatures(features_PusatPelayanan_19);
var lyr_PusatPelayanan_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PusatPelayanan_19, 
                style: style_PusatPelayanan_19,
                popuplayertitle: "Pusat Pelayanan",
                interactive: true,
    title: 'Pusat Pelayanan<br />\
    <img src="styles/legend/PusatPelayanan_19_0.png" /> Pusat Pelayanan Kota/Kawasan Perkotaan<br />\
    <img src="styles/legend/PusatPelayanan_19_1.png" /> Sub Pusat Pelayanan Kota/Kawasan Perkotaan<br />\
    <img src="styles/legend/PusatPelayanan_19_2.png" /> Pusat Lingkungan Kelurahan/Desa<br />'
        });
var format_SWP_BLOK_20 = new ol.format.GeoJSON();
var features_SWP_BLOK_20 = format_SWP_BLOK_20.readFeatures(json_SWP_BLOK_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWP_BLOK_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWP_BLOK_20.addFeatures(features_SWP_BLOK_20);
var lyr_SWP_BLOK_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWP_BLOK_20, 
                style: style_SWP_BLOK_20,
                popuplayertitle: "SWP_BLOK",
                interactive: true,
                title: '<img src="styles/legend/SWP_BLOK_20.png" /> SWP_BLOK'
            });
var format_BatasDesa_21 = new ol.format.GeoJSON();
var features_BatasDesa_21 = format_BatasDesa_21.readFeatures(json_BatasDesa_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDesa_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDesa_21.addFeatures(features_BatasDesa_21);
var lyr_BatasDesa_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasDesa_21, 
                style: style_BatasDesa_21,
                popuplayertitle: "Batas Desa",
                interactive: true,
                title: '<img src="styles/legend/BatasDesa_21.png" /> Batas Desa'
            });
var format_TOPONIMI_22 = new ol.format.GeoJSON();
var features_TOPONIMI_22 = format_TOPONIMI_22.readFeatures(json_TOPONIMI_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_22.addFeatures(features_TOPONIMI_22);
var lyr_TOPONIMI_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_22,
maxResolution:1.4002233076130983,
 
                style: style_TOPONIMI_22,
                popuplayertitle: "TOPONIMI",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_22.png" /> TOPONIMI'
            });
var format_VIDEO_DRONE_23 = new ol.format.GeoJSON();
var features_VIDEO_DRONE_23 = format_VIDEO_DRONE_23.readFeatures(json_VIDEO_DRONE_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VIDEO_DRONE_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VIDEO_DRONE_23.addFeatures(features_VIDEO_DRONE_23);
var lyr_VIDEO_DRONE_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VIDEO_DRONE_23, 
                style: style_VIDEO_DRONE_23,
                popuplayertitle: "VIDEO_DRONE",
                interactive: true,
                title: '<img src="styles/legend/VIDEO_DRONE_23.png" /> VIDEO_DRONE'
            });
var group_PusatPelayanan = new ol.layer.Group({
                                layers: [lyr_PusatPelayanan_19,],
                                fold: "close",
                                title: "Pusat Pelayanan"});
var group_PrasaranaLainnya = new ol.layer.Group({
                                layers: [lyr_JaringanPrasaranaLainnya_17,lyr_InfrastrukturPrasaranaLainnya_18,],
                                fold: "close",
                                title: "Prasarana Lainnya"});
var group_Persampahan = new ol.layer.Group({
                                layers: [lyr_InfrastrukturPersampahan_16,],
                                fold: "close",
                                title: "Persampahan"});
var group_Telekomunikasi = new ol.layer.Group({
                                layers: [lyr_InfrastukturTelekomunikasi_15,],
                                fold: "close",
                                title: "Telekomunikasi"});
var group_Energi = new ol.layer.Group({
                                layers: [lyr_JaringanEnergi_13,lyr_InfrastrukturEnergi_14,],
                                fold: "close",
                                title: "Energi"});
var group_Drainase = new ol.layer.Group({
                                layers: [lyr_JaringanDrainase_11,lyr_InfrastrukturDrainase_12,],
                                fold: "close",
                                title: "Drainase"});
var group_Limbah = new ol.layer.Group({
                                layers: [lyr_Limbah_10,],
                                fold: "close",
                                title: "Limbah"});
var group_AirMinum = new ol.layer.Group({
                                layers: [lyr_infrastrukturairminum_8,lyr_jaringanairminum_9,],
                                fold: "close",
                                title: "Air Minum"});
var group_Transportasi = new ol.layer.Group({
                                layers: [lyr_Infrastrukturtransportasi_6,lyr_JaringanTransportasi_7,],
                                fold: "close",
                                title: "Transportasi"});
var group_KonsepPolaRuang = new ol.layer.Group({
                                layers: [lyr_KONSEPPOLARUANG_5,],
                                fold: "open",
                                title: "Konsep Pola Ruang"});
var group_ANALISIS = new ol.layer.Group({
                                layers: [],
                                fold: "close",
                                title: "ANALISIS"});
var group_STATUSLAHAN = new ol.layer.Group({
                                layers: [lyr_KawasanHutan_2,lyr_HAT_3,lyr_LP2B_4,],
                                fold: "close",
                                title: "STATUS LAHAN"});


lyr_GoogleHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_KawasanHutan_2.setVisible(false);lyr_HAT_3.setVisible(false);lyr_LP2B_4.setVisible(false);lyr_KONSEPPOLARUANG_5.setVisible(true);lyr_Infrastrukturtransportasi_6.setVisible(false);lyr_JaringanTransportasi_7.setVisible(false);lyr_infrastrukturairminum_8.setVisible(false);lyr_jaringanairminum_9.setVisible(false);lyr_Limbah_10.setVisible(false);lyr_JaringanDrainase_11.setVisible(false);lyr_InfrastrukturDrainase_12.setVisible(false);lyr_JaringanEnergi_13.setVisible(false);lyr_InfrastrukturEnergi_14.setVisible(false);lyr_InfrastukturTelekomunikasi_15.setVisible(false);lyr_InfrastrukturPersampahan_16.setVisible(false);lyr_JaringanPrasaranaLainnya_17.setVisible(false);lyr_InfrastrukturPrasaranaLainnya_18.setVisible(false);lyr_PusatPelayanan_19.setVisible(false);lyr_SWP_BLOK_20.setVisible(true);lyr_BatasDesa_21.setVisible(true);lyr_TOPONIMI_22.setVisible(true);lyr_VIDEO_DRONE_23.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,group_STATUSLAHAN,group_KonsepPolaRuang,group_Transportasi,group_AirMinum,group_Limbah,group_Drainase,group_Energi,group_Telekomunikasi,group_Persampahan,group_PrasaranaLainnya,group_PusatPelayanan,lyr_SWP_BLOK_20,lyr_BatasDesa_21,lyr_TOPONIMI_22,lyr_VIDEO_DRONE_23];
lyr_KawasanHutan_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'LUASHA': 'LUASHA', });
lyr_HAT_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'TIPEHAK': 'TIPEHAK', 'TIPEPRODUK': 'TIPEPRODUK', 'TAHUN': 'TAHUN', 'NIB': 'NIB', 'LUASTERTUL': 'LUASTERTUL', 'LUASPETA': 'LUASPETA', 'SUMBERGEOM': 'SUMBERGEOM', 'ALATUKUR': 'ALATUKUR', 'METODUKUR': 'METODUKUR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LP2B_4.set('fieldAliases', {'P_TANAM': 'P_TANAM', 'LP2B_1': 'LP2B_1', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', });
lyr_KONSEPPOLARUANG_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Infrastrukturtransportasi_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_JaringanTransportasi_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_infrastrukturairminum_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_jaringanairminum_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_Limbah_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanDrainase_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturDrainase_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanEnergi_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_InfrastrukturEnergi_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastukturTelekomunikasi_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_InfrastrukturPersampahan_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_JaringanPrasaranaLainnya_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', 'Shape_Length': 'Shape_Length', });
lyr_InfrastrukturPrasaranaLainnya_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_PusatPelayanan_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'ORDE01': 'Orde 1', 'ORDE02': 'Orde 2', 'JNSRSR': 'Jenis Rencana Struktur Ruang', 'STSJRN': 'Status Jaringan Infrastruktur', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'REMARK': 'Catatan', 'SBDATA': 'Sumber Data', });
lyr_SWP_BLOK_20.set('fieldAliases', {'BWP': 'BWP', 'SBWP': 'SBWP', 'FID_Batas_': 'FID_Batas_', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'BLOK': 'BLOK', 'luas_ha': 'luas_ha', });
lyr_BatasDesa_21.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'METADATA': 'METADATA', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_TOPONIMI_22.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS_UTAM': 'JENIS_UTAM', 'JENIS': 'JENIS', 'KEGIATAN_O': 'KEGIATAN_O', 'TOPONIM': 'TOPONIM', 'SUMBER': 'SUMBER', 'FOTO': 'FOTO', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_VIDEO_DRONE_23.set('fieldAliases', {'objectid': 'objectid', 'fid_1': 'fid_1', 'video': 'video', 'LOKASI': 'LOKASI', });
lyr_KawasanHutan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', });
lyr_HAT_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'TIPEHAK': 'TextEdit', 'TIPEPRODUK': 'TextEdit', 'TAHUN': 'TextEdit', 'NIB': 'TextEdit', 'LUASTERTUL': 'TextEdit', 'LUASPETA': 'TextEdit', 'SUMBERGEOM': 'TextEdit', 'ALATUKUR': 'TextEdit', 'METODUKUR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LP2B_4.set('fieldImages', {'P_TANAM': '', 'LP2B_1': '', 'WADMKC': '', 'WADMKD': '', });
lyr_KONSEPPOLARUANG_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Infrastrukturtransportasi_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': '', });
lyr_JaringanTransportasi_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_infrastrukturairminum_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_jaringanairminum_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_Limbah_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanDrainase_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturDrainase_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanEnergi_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_InfrastrukturEnergi_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': '', });
lyr_InfrastukturTelekomunikasi_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_InfrastrukturPersampahan_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_JaringanPrasaranaLainnya_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_InfrastrukturPrasaranaLainnya_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_PusatPelayanan_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'ValueMap', 'ORDE02': 'ValueMap', 'JNSRSR': 'ValueMap', 'STSJRN': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', });
lyr_SWP_BLOK_20.set('fieldImages', {'BWP': 'TextEdit', 'SBWP': 'TextEdit', 'FID_Batas_': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'BLOK': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_BatasDesa_21.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NAMOBJ': 'TextEdit', 'METADATA': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_TOPONIMI_22.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS_UTAM': 'TextEdit', 'JENIS': 'TextEdit', 'KEGIATAN_O': 'TextEdit', 'TOPONIM': 'TextEdit', 'SUMBER': 'TextEdit', 'FOTO': 'ExternalResource', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_VIDEO_DRONE_23.set('fieldImages', {'objectid': 'TextEdit', 'fid_1': 'TextEdit', 'video': 'TextEdit', 'LOKASI': 'TextEdit', });
lyr_KawasanHutan_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', });
lyr_HAT_3.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'KECAMATAN': 'inline label - always visible', 'KELURAHAN': 'inline label - always visible', 'TIPEHAK': 'inline label - always visible', 'TIPEPRODUK': 'inline label - always visible', 'TAHUN': 'inline label - always visible', 'NIB': 'inline label - always visible', 'LUASTERTUL': 'inline label - always visible', 'LUASPETA': 'inline label - always visible', 'SUMBERGEOM': 'inline label - always visible', 'ALATUKUR': 'inline label - always visible', 'METODUKUR': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_LP2B_4.set('fieldLabels', {'P_TANAM': 'inline label - always visible', 'LP2B_1': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', });
lyr_KONSEPPOLARUANG_5.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'NAMZON': 'hidden field', 'KODZON': 'hidden field', 'NAMSZN': 'hidden field', 'KODSZN': 'hidden field', 'JNSRPR': 'hidden field', 'KODEWP': 'hidden field', 'KODSWP': 'hidden field', 'KODBLK': 'inline label - always visible', 'KODSBL': 'inline label - always visible', 'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'KKOP_1': 'hidden field', 'LP2B_2': 'inline label - always visible', 'KRB_03': 'inline label - always visible', 'TOD_04': 'hidden field', 'TEB_05': 'inline label - always visible', 'PUSLIT': 'hidden field', 'CAGBUD': 'inline label - always visible', 'RESAIR': 'hidden field', 'KSMPDN': 'inline label - always visible', 'HANKAM': 'inline label - always visible', 'KKARST': 'hidden field', 'PTBGMB': 'inline label - visible with data', 'MGRSAT': 'hidden field', 'RDBUMI': 'hidden field', 'TPZ_00': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'LUASHA': 'inline label - always visible', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Infrastrukturtransportasi_6.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_JaringanTransportasi_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_infrastrukturairminum_8.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_jaringanairminum_9.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_Limbah_10.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanDrainase_11.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_InfrastrukturDrainase_12.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanEnergi_13.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_InfrastrukturEnergi_14.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'no label', });
lyr_InfrastukturTelekomunikasi_15.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_InfrastrukturPersampahan_16.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_JaringanPrasaranaLainnya_17.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', });
lyr_InfrastrukturPrasaranaLainnya_18.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_PusatPelayanan_19.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'ORDE01': 'inline label - always visible', 'ORDE02': 'inline label - always visible', 'JNSRSR': 'inline label - always visible', 'STSJRN': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SBDATA': 'inline label - always visible', });
lyr_SWP_BLOK_20.set('fieldLabels', {'BWP': 'inline label - always visible', 'SBWP': 'inline label - always visible', 'FID_Batas_': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'BLOK': 'inline label - always visible', 'luas_ha': 'inline label - always visible', });
lyr_BatasDesa_21.set('fieldLabels', {'OBJECTID_1': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', });
lyr_TOPONIMI_22.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'JENIS_UTAM': 'inline label - always visible', 'JENIS': 'inline label - always visible', 'KEGIATAN_O': 'inline label - always visible', 'TOPONIM': 'inline label - always visible', 'SUMBER': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_VIDEO_DRONE_23.set('fieldLabels', {'objectid': 'inline label - always visible', 'fid_1': 'inline label - always visible', 'video': 'inline label - always visible', 'LOKASI': 'inline label - always visible', });
lyr_VIDEO_DRONE_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});