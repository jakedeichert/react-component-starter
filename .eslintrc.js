module.exports = {
    root: true,

    parser: 'babel-eslint',

    env: {
        commonjs: true,
        es6: true,
        node: true,
    },

    plugins: [
        'jsx-a11y',
        'react',
    ],

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },

    settings: {
        // https://github.com/yannickcr/eslint-plugin-react
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0"   // React version, default to the latest React stable release
        }
    },

    // http://eslint.org/docs/rules/
    rules: {
        'array-callback-return': 'warn',
        'default-case': ['warn', { commentPattern: '^no default$' }],
        'dot-location': ['warn', 'property'],
        'eqeqeq': ['warn', 'allow-null'],
        'guard-for-in': 'warn',
        'new-cap': ['warn', { newIsCap: true }],
        'new-parens': 'warn',
        'no-array-constructor': 'warn',
        'no-caller': 'warn',
        'no-cond-assign': ['warn', 'always'],
        'no-const-assign': 'warn',
        'no-control-regex': 'warn',
        'no-delete-var': 'warn',
        'no-dupe-args': 'warn',
        'no-dupe-class-members': 'warn',
        'no-dupe-keys': 'warn',
        'no-duplicate-case': 'warn',
        'no-empty-character-class': 'warn',
        'no-empty-pattern': 'warn',
        'no-eval': 'warn',
        'no-ex-assign': 'warn',
        'no-extend-native': 'warn',
        'no-extra-bind': 'warn',
        'no-extra-label': 'warn',
        'no-fallthrough': 'warn',
        'no-func-assign': 'warn',
        'no-implied-eval': 'warn',
        'no-invalid-regexp': 'warn',
        'no-iterator': 'warn',
        'no-label-var': 'warn',
        'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
        'no-lone-blocks': 'warn',
        'no-loop-func': 'warn',
        'no-mixed-operators': ['warn', {
            groups: [
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: false
        }],
        'no-multi-str': 'warn',
        'no-native-reassign': 'warn',
        'no-negated-in-lhs': 'warn',
        'no-new-func': 'warn',
        'no-new-object': 'warn',
        'no-new-symbol': 'warn',
        'no-new-wrappers': 'warn',
        'no-obj-calls': 'warn',
        'no-octal': 'warn',
        'no-octal-escape': 'warn',
        'no-redeclare': 'warn',
        'no-regex-spaces': 'warn',
        'no-restricted-syntax': [
            'warn',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-return-assign': 'warn',
        'no-script-url': 'warn',
        'no-self-assign': 'warn',
        'no-self-compare': 'warn',
        'no-sequences': 'warn',
        'no-shadow-restricted-names': 'warn',
        'no-sparse-arrays': 'warn',
        'no-this-before-super': 'warn',
        'no-throw-literal': 'warn',
        'no-undef': 'warn',
        'no-unexpected-multiline': 'warn',
        'no-unreachable': 'warn',
        'no-unused-expressions': 'warn',
        'no-unused-labels': 'warn',
        'no-unused-vars': ['warn', { vars: 'local', args: 'none' }],
        'no-use-before-define': ['warn', 'nofunc'],
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'warn',
        'no-useless-constructor': 'warn',
        'no-useless-escape': 'warn',
        'no-useless-rename': ['warn', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],
        'no-with': 'warn',
        'no-whitespace-before-property': 'warn',
        'operator-assignment': ['warn', 'always'],
        'radix': 'warn',
        'require-yield': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        'strict': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'use-isnan': 'warn',
        'valid-typeof': 'warn',

        // https://github.com/yannickcr/eslint-plugin-react
        // Prevent usage of deprecated methods
        'react/no-deprecated': 'warn',
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'warn',
        // Prevent usage of isMounted
        'react/no-is-mounted': 'warn',
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 'warn',
        // Enforce ES6 class for returning value in render function
        'react/require-render-return': 'warn',
        // Prevent comments from being inserted as text nodes
        'react/no-comment-textnodes': 'warn',
        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 'warn',
        // Prevent using string references in ref attribute
        'react/no-string-refs': 'warn',
        // Prevent usage of unknown DOM property (fixable)
        'react/no-unknown-property': 'warn',
        // Prevent missing props validation in a React component definition
        'react/prop-types': 'warn',
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 'warn',
        // Prevent usage of findDOMNode
        // 'react/no-find-dom-node': 'warn',
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 'warn',
        // Enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case': ['warn'],
        // Validate spacing before closing bracket in JSX
        'react/jsx-space-before-closing': ['warn', 'never'],
        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': 'warn',
        // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-no-bind': 'warn',
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 'warn',
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 'warn',
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': 'warn',
        // Validate JSX has key prop when in array or iterator
        'react/jsx-key': 'warn',
        // Validate JSX indentation
        'react/jsx-indent': 'warn',
        // Validate props indentation in JSX (fixable)
        'react/jsx-indent-props': 'warn',
        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': 'warn',
        // Enforce position of the first prop in JSX
        'react/jsx-first-prop-new-line': ['warn', 'never'],
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': [1, { 'extensions': ['.js'] }],
        // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
        'react/jsx-equals-spacing': 'warn',
        // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
        'react/jsx-curly-spacing': ['warn', 'never'],
        // Enforce boolean attributes notation in JSX (fixable)
        'react/jsx-boolean-value': ['warn', 'always'],
        // Validate closing bracket location in JSX (fixable)
        'react/jsx-closing-bracket-location': ['warn', 'after-props'],

        // https://github.com/evcohen/eslint-plugin-jsx-a11y
        // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role
        'jsx-a11y/aria-role': 'warn',
        // Enforce all aria-* props are valid
        'jsx-a11y/aria-props': 'warn',
        // Enforce that <img> JSX elements use the alt prop
        'jsx-a11y/img-has-alt': 'warn',
        // Enforce <img> alt prop does not contain the word "image", "picture", or "photo"
        'jsx-a11y/img-redundant-alt': 'warn',
        // Enforce that the accessKey prop is not used on any element to avoid
        // complications with keyboard commands used by a screenreader
        'jsx-a11y/no-access-key': 'warn',
        // Enforce that non-interactive, visible elements (such as <div>) that
        // have click handlers use the role attribute
        'jsx-a11y/onclick-has-role': 'warn',
        // Enforce that elements with onClick handlers must be focusable
        'jsx-a11y/onclick-has-focus': 'warn',
        // Enforce that elements that do not support ARIA roles, states, and
        // properties do not have those attributes
        'jsx-a11y/aria-unsupported-elements': 'warn',
        // Enforce ARIA state and property values are valid
        'jsx-a11y/aria-proptypes': 'warn',
        // Enforce an anchor element's href prop value is not just #
        'jsx-a11y/href-no-hash': 'warn',
        // Enforce <html> element has lang prop
        'jsx-a11y/html-has-lang': 'warn',
        // Enforce that <label> elements have the htmlFor prop
        'jsx-a11y/label-has-for': 'warn',
        // Enforce lang attribute has a valid value
        'jsx-a11y/lang': 'warn',
        // Enforce heading (h1, h2, etc) elements contain accessible content
        'jsx-a11y/heading-has-content': 'warn',
        // Enforce that onMouseOver/onMouseOut are accompanied by
        // onFocus/onBlur for keyboard-only users
        'jsx-a11y/mouse-events-have-key-events': 'warn',
        // Enforce usage of onBlur over onChange on select menus for accessibility
        'jsx-a11y/no-onchange': 'warn',
        // Enforce that elements with ARIA roles must have all required attributes for that role
        'jsx-a11y/role-has-required-aria-props': 'warn',
        // Enforce that elements with explicit or implicit roles defined
        // contain only aria-* properties supported by that role
        'jsx-a11y/role-supports-aria-props': 'warn',
        // Enforce tabIndex value is not greater than zero
        'jsx-a11y/tabindex-no-positive': 'warn',
    }
};
