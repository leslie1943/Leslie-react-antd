export default [
  // user
  // {
  //   path: '/user',
  //   component: '../layouts/UserLayout',
  //   routes: [
  //     { path: '/user', redirect: '/user/login' },
  //     { path: '/user/login', component: './User/Login' },
  //     { path: '/user/register', component: './User/Register' },
  //     { path: '/user/register-result', component: './User/RegisterResult' },
  //   ],
  // },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      // { path: '/', redirect: '/publish/send-mr' },
      { path: '/', redirect: '/antd/mention' },

      // -------------- the code of Leslie demo
      // {
      //   path: '/demo',
      //   name: 'demo',
      //   icon: 'dashboard',
      //   routes: [
      //     {
      //       path: '/demo/products',
      //       name: 'products',
      //       component: './Demo/products',
      //     },
      //     {
      //       path: '/demo/todoList',
      //       name: 'todoList',
      //       component: './Demo/TodoList',
      //     },
      //   ],
      // },
      // publish
      {
        path: '/publish',
        name: 'publish',
        icon: 'gitlab',
        routes: [
          // {
          //   path: '/publish/basic',
          //   name: 'basic',
          //   icon: 'pushpin',
          //   component: './Publish/BasicPublish',
          // },

          {
            path: '/publish/send-mr',
            name: 'send-mr',
            icon: 'rocket',
            component: './Publish/SendMR',
          },

          {
            path: '/publish/accept-mr',
            name: 'accept-mr',
            icon: 'check',
            component: './Publish/AcceptMR',
          },
          // {
          //   path: '/publish/close',
          //   name: 'close',
          //   icon: 'close-circle',
          //   component: './Publish/CloseRequest',
          // },
          // {
          //   path: '/publish/tags',
          //   name: 'tags',
          //   icon: 'tags',
          //   component: './Publish/Tags',
          // },
          {
            path: '/publish/new-tag',
            name: 'new-tag',
            icon: 'tag',
            component: './Publish/NewTag',
          },

          {
            path: '/publish/search-mr',
            name: 'search-mr',
            icon: 'search',
            component: './Publish/SearchMR',
          },
        ],
      },
      // jenkins
      {
        path: '/jenkins',
        name: 'jenkins',
        icon: 'deployment-unit',
        routes: [
          {
            path: '/jenkins/auth',
            name: 'auth',
            icon: 'key',
            component: './Jenkins/Auth',
          },
          {
            path: '/jenkins/job',
            name: 'job',
            icon: 'user',
            component: './Jenkins/Job',
          },
        ],
      },
      // antd pro
      {
        path: '/antd',
        name: 'antd',
        icon: 'ant-design',
        routes: [
          {
            path: '/antd/mention',
            name: 'mention',
            icon: 'paper-clip',
            component: './Antd/MentionDemo',
          },
          {
            path: '/antd/grid',
            name: 'grid',
            icon: 'paper-clip',
            component: './Antd/GridDemo',
          },
          {
            path: '/antd/layout',
            name: 'layout',
            icon: 'paper-clip',
            component: './Antd/LayoutDemo',
          },
          {
            path: '/antd/breadcrumb',
            name: 'breadcrumb',
            icon: 'paper-clip',
            component: './Antd/BreadCrumbDemo',
          },
          {
            path: '/antd/dropdown',
            name: 'dropdown',
            icon: 'paper-clip',
            component: './Antd/DropdownDemo',
          },
          {
            path: '/antd/menu',
            name: 'menu',
            icon: 'paper-clip',
            component: './Antd/MenuDemo',
          },
          {
            path: '/antd/pagination',
            name: 'pagination',
            icon: 'paper-clip',
            component: './Antd/PaginationDemo',
          },
          {
            path: '/antd/step',
            name: 'step',
            icon: 'paper-clip',
            component: './Antd/StepDemo',
          },
          {
            path: '/antd/auto-complete',
            name: 'autoComplete',
            icon: 'paper-clip',
            component: './Antd/AutoCompleteDemo',
          },
          {
            path: '/antd/checkbox',
            name: 'checkbox',
            icon: 'paper-clip',
            component: './Antd/CheckboxDemo',
          },
          {
            path: 'antd/cascader',
            name: 'cascader',
            icon: 'play-circle',
            component: './Antd/CascaderDemo',
          },
          {
            path: 'antd/date-picker',
            name: 'datepicker',
            icon: 'play-circle',
            component: './Antd/DatePickerDemo',
          },
          {
            path: 'antd/input-number',
            name: 'inputnumber',
            icon: 'play-circle',
            component: './Antd/InputNumberDemo',
          },
          {
            path: 'antd/rate',
            name: 'rate',
            icon: 'play-circle',
            component: './Antd/RateDemo',
          },
          {
            path: 'antd/switch',
            name: 'switch',
            icon: 'play-circle',
            component: './Antd/SwitchDemo',
          },
          {
            path: 'antd/input',
            name: 'input',
            icon: 'play-circle',
            component: './Antd/InputDemo',
          },
          {
            path: 'antd/radio',
            name: 'radio',
            icon: 'play-circle',
            component: './Antd/RadioDemo',
          },
          {
            path: 'antd/slider',
            name: 'slider',
            icon: 'play-circle',
            component: './Antd/SliderDemo',
          },
          {
            path: 'antd/select',
            name: 'select',
            icon: 'play-circle',
            component: './Antd/SelectDemo',
          },
          {
            path: 'antd/tree-select',
            name: 'treeSelect',
            icon: 'play-circle',
            component: './Antd/TreeSelectDemo',
          },
          {
            path: 'antd/transfer',
            name: 'transfer',
            icon: 'play-circle',
            component: './Antd/TransferDemo',
          },
          {
            path: 'antd/time-picker',
            name: 'timePicker',
            icon: 'play-circle',
            component: './Antd/TimePickerDemo',
          },
          {
            path: 'antd/upload',
            name: 'upload',
            icon: 'play-circle',
            component: './Antd/UploadDemo',
          },
        ],
      },
      // data
      {
        path: '/data',
        name: 'data',
        icon: 'ant-design',
        routes: [
          {
            path: 'data/carousel',
            name: 'carousel',
            icon: 'play-circle',
            component: './AntdData/CarouselDemo',
          },
          {
            path: 'data/avatar',
            name: 'avatar',
            icon: 'play-circle',
            component: './AntdData/AvatarDemo',
          },
          {
            path: 'data/badge',
            name: 'badge',
            icon: 'play-circle',
            component: './AntdData/BadgeDemo',
          },
          {
            path: 'data/comment',
            name: 'comment',
            icon: 'play-circle',
            component: './AntdData/CommentDemo',
          },
          {
            path: 'data/collapse',
            name: 'collapse',
            icon: 'play-circle',
            component: './AntdData/CollapseDemo',
          },
          {
            path: 'data/card',
            name: 'card',
            icon: 'play-circle',
            component: './AntdData/CardDemo',
          },
          {
            path: 'data/calendar',
            name: 'calendar',
            icon: 'play-circle',
            component: './AntdData/CalendarDemo',
          },
          {
            path: 'data/empty',
            name: 'empty',
            icon: 'play-circle',
            component: './AntdData/EmptyDemo',
          }, {
            path: 'data/list',
            name: 'list',
            icon: 'play-circle',
            component: './AntdData/ListDemo',
          }, {
            path: 'data/infinite-list',
            name: 'infiniteList',
            icon: 'play-circle',
            component: './AntdData/ListInfiniteScrollDemo',
          },
          {
            path: 'data/virtualize-list',
            name: 'virtualizeList',
            icon: 'play-circle',
            component: './AntdData/VirtualizedDemo',
          },
          {
            path: 'data/popover',
            name: 'popover',
            icon: 'play-circle',
            component: './AntdData/PopoverDemo',
          }, {
            path: 'data/statistic',
            name: 'statistic',
            icon: 'play-circle',
            component: './AntdData/StatisticDemo',
          }, {
            path: 'data/tree',
            name: 'tree',
            icon: 'play-circle',
            component: './AntdData/TreeDemo',
          }, {
            path: 'data/tooltip',
            name: 'tooltip',
            icon: 'play-circle',
            component: './AntdData/ToolTipDemo',
          }, {
            path: 'data/timeline',
            name: 'timeline',
            icon: 'play-circle',
            component: './AntdData/TimelineDemo',
          },
          {
            path: 'data/test',
            name: 'test',
            icon: 'play-circle',
            component: './AntdData/TestDemo',
          }, {
            path: 'data/tag',
            name: 'tag',
            icon: 'play-circle',
            component: './AntdData/TagDemo',
          }, {
            path: 'data/tabs',
            name: 'tabs',
            icon: 'play-circle',
            component: './AntdData/TabsDemo',
          },
        ],
      },
      //feedback
      {
        path: '/feedback',
        name: 'feedback',
        icon: 'form',
        routes: [
          {
            path: '/feedback/alert',
            name: 'alert',
            icon: 'and-design',
            component: './AntdFeedback/AlertDemo'
          },
          {
            path: '/feedback/drawer',
            name: 'drawer',
            icon: 'and-design',
            component: './AntdFeedback/DrawerDemo'
          }, {
            path: '/feedback/modal',
            name: 'modal',
            icon: 'and-design',
            component: './AntdFeedback/ModalDemo'
          }, {
            path: '/feedback/message',
            name: 'message',
            icon: 'and-design',
            component: './AntdFeedback/MessageDemo'
          }, {
            path: '/feedback/notify',
            name: 'notify',
            icon: 'and-design',
            component: './AntdFeedback/NotifyDemo'
          }, {
            path: '/feedback/progress',
            name: 'progress',
            icon: 'and-design',
            component: './AntdFeedback/ProgressDemo'
          }, {
            path: '/feedback/popconfirm',
            name: 'popconfirm',
            icon: 'and-design',
            component: './AntdFeedback/PopConfirmDemo'
          }, {
            path: '/feedback/spin',
            name: 'spin',
            icon: 'and-design',
            component: './AntdFeedback/SpinDemo'
          },
          {
            path: '/feedback/skeleton',
            name: 'skeleton',
            icon: 'and-design',
            component: './AntdFeedback/SkeletonDemo'
          }
        ]
      },
      //other
      {
        path: '/other',
        name: 'other',
        icon: 'form',
        routes: [
          {
            path: '/other/anchor',
            name: 'anchor',
            icon: 'and-design',
            component: './AndtOther/OtherDemo'
          },
        ]
      },
      // antd forms
      {
        path: '/forms',
        name: 'forms',
        icon: 'form',
        routes: [
          {
            path: '/forms/horizontal',
            name: 'horizontal',
            icon: 'border-horizontal',
            component: './AntdForms/HorizontalLoginForm',
          },
          {
            path: '/forms/normal',
            name: 'normal',
            icon: 'hdd',
            component: './AntdForms/NormalLoginForm',
          },
          {
            path: '/forms/advanced',
            name: 'advanced',
            icon: 'hdd',
            component: './AntdForms/AdvancedSearchForm',
          },
          {
            path: '/forms/collection',
            name: 'collection',
            icon: 'pic-center',
            component: './AntdForms/CollectionCreateForm',
          },
          {
            path: '/forms/dynamic',
            name: 'dynamic',
            icon: 'pic-center',
            component: './AntdForms/DynamicFieldsForm',
          },
          {
            path: '/forms/time',
            name: 'time',
            icon: 'clock-circle',
            component: './AntdForms/TimeRelatedForm',
          },
          {
            path: '/forms/custom',
            name: 'custom',
            icon: 'customer-service',
            component: './AntdForms/CustomForm',
          },
          {
            path: '/forms/raw',
            name: 'raw',
            icon: 'bulb',
            component: './AntdForms/RawForm',
          },
          {
            path: '/forms/validate',
            name: 'validate',
            icon: 'bulb',
            component: './AntdForms/ValidateForm',
          },
          {
            path: '/forms/related',
            name: 'related',
            icon: 'bulb',
            component: './AntdForms/RelatedForm',
          },
          {
            path: '/forms/layout',
            name: 'layout',
            icon: 'layout',
            component: './AntdForms/LayoutForm',
          },
          {
            path: '/forms/rules',
            name: 'rules',
            icon: 'layout',
            component: './AntdForms/RulesForm',
          },
          {
            path: '/forms/real',
            name: 'real',
            icon: 'form',
            component: './AntdForms/RealForm',
          },
        ],
      },
      // node
      {
        path: 'node',
        name: 'node',
        icon: 'menu',
        routes: [
          {
            path: '/node/path',
            name: 'path',
            icon: 'menu-unfold',
            component: './Node/PathDemo',
          },
        ],
      },
      // system
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
    ],
  },
];
