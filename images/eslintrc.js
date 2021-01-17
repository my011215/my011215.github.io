module.exports = {
    root: true,
    // parserOptions: {
    //     parser: 'babel-eslint',
    //     sourceType: 'module'
    // },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    // extends: ['plugin:vue/recommended', 'eslint:recommended'],
    extends: ['plugin:vue/essential', '@vue/prettier'],


    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-unused-components': [
            'off',
            {
                ignoreWhenBindingPresent: true,
            },
        ],
        'no-unused-vars': [
            'error',
            {
                // 允许声明未使用变量
                vars: 'local',
                // 参数不检查
                args: 'none',
            },
        ],

    },
    parserOptions: {
        parser: 'babel-eslint',
    }
}