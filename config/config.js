module.exports = {
    copyAssets: {
        src: ['{{SRC}}/assets/*/'],
        dest: '{{WWW}}/assets'
    },
    copyIndexContent: {
        src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
        dest: '{{WWW}}'
    },
    copyFonts: {
        src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/*/', '{{ROOT}}/node_modules/ionic-angular/fonts/*/'],
        dest: '{{WWW}}/assets/fonts'
    },
    copyPrime: {
        src: ['{{ROOT}}/node_modules/primeicons/primeicons.css',
            '{{ROOT}}/node_modules/primeng/resources/themes/nova-light/theme.css',
            '{{ROOT}}/node_modules/primeng/resources/primeng.min.css'],
        dest: '{{WWW}}/assets/css'
    },
    copyPrimeFonts: {
        src: ['{{ROOT}}/node_modules/primeicons/fonts/*/', '{{ROOT}}/node_modules/primeng/resources/themes/nova-light/fonts/*/'],
        dest: '{{WWW}}/assets/css/fonts'
    },
    copyPolyfills: {
        src: [`{{ROOT}}/node_modules/ionic-angular/polyfills/${process.env.IONIC_POLYFILL_FILE_NAME}`],
        dest: '{{BUILD}}'
    },
    copySwToolbox: {
        src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
        dest: '{{BUILD}}'
    },
    copyFullcalendarjs: {
        src: ["{{ROOT}}/node_modules/fullcalendar/dist/fullcalendar.min.js"],
        dest: '{{WWW}}/assets/js'
    },
    copyFullcalendarCss: {
        src: ["{{ROOT}}/node_modules/fullcalendar/dist/fullcalendar.min.css"],
        dest: '{{WWW}}/assets/css'
    },
}