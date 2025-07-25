'use strict';
module.exports = {
    open_panel: '翻译',
    'localization-editor': '本地化编辑器',
    description: '本地化编辑器',
    service_provider: '译文服务商',
    collection: '收集并统计',
    language_compilation: '语言编译',
    select_placeholder: '请选择',
    unselect_service_tip: '未选择译文服务商，将不支持自动翻译功能',
    local_language: '本地开发语言:',
    collected_from_resource_files: '从资源文件中收集',
    required: '*必选',
    file_no_exist: '文件不存在',
    cannot_empty: '不能为空',
    common_languages: '常用的语言',
    cancel: '取消',
    confirm: '确定',
    localization_editor_project_config: '本地化项目配置',
    localization_editor_editor_config: '本地化编辑器配置',
    localization_editor_provider_config: '本地化翻译服务商配置',
    ask_delete: '是否删除？',
    loading_tips: '加载中...',

    component: {
        help: `https://docs.cocos.com/creator/manual/zh/editor/l10n/l10n-label.html`,
        string: 'Label 组件内文本',
        count: '用于获取变体的数字',
        key: '本地化的键值',
    },

    YOUDAO: {
        'zh-CHS': '简体中文',
        'zh-CHT': '繁体中文',
    },
    label_inspector: {
        no_origin: '无原文',
        key: '唯一标识符',
        'key:': '唯一标识符:',
        save: '保存',
        reset: '重置',
        saving: '保存中...',
        cannot_empty: '不能为空',
        error_tooltip: '包含字母、数字、下划线、连字符、@、/、+、| 、.\n不能为其他字符',
        exist_media_tooltip: '该 key 为资源的 key',
        edit: '编辑',
    },
    build: {
        compress_warning: '因 uuid 为 "${a}" 的图片与 uuid 为 "${b}" 的图片的压缩纹理选项不一致，导致构建失败，请设置为一致',
        packable_warning: 'uuid 为 \'${uuid}\' 的图片由于开启了合图功能，该图片的翻译失效',
        use_polyfill: '使用的 polyfill 脚本',
        use_language: '使用的语言',
        select_all: '全选',
        default_language: '默认语言',
        fallback_language: '备用语言',
    },
    home: {
        po_name: 'PO 文件',
        csv_name: 'CSV',
        xlsx_name: 'Excel 工作簿 ',
        service_provider: '译文服务商',
        collection: '收集',
        language_compilation: '语言编译',
        select_placeholder: '请选择',
        unselect_service_tip: '未选择译文服务商，将不支持自动翻译功能',
        'local_language:': '本地开发语言:',
        collected_from_resource_files: '从资源文件中收集',
        required: '*必选',
        delete: '删除',
        preview: '预览',
        combine: '编译',
        translate: '翻译',
        complement: '补全',
        not_recorded: '未统计',
        collect_and_count: '收集并统计',
        add_new_language: '添加新语言',
        add: '添加',
        select: '请选择',
        language: '语言',
        'language:': '语言:',
        extname: '扩展名',
        exclude_path: '排除路径',
        language_for_service_provider: '服务商识别的语言',
        dir: '目录',
        search_dir: '搜索目录',
        translate_process: ' 翻译进度',
        combine_process: '编译进度',
        operation: '操作',
        local_language: '本地开发语言',
        combine_tooltip: '文本按实际字数计算, 资源按单位1计算',
        translate_tooltip: '任意条目以单位1计算',
        count: '字数:',
        collecting: '正在统计中',
        unselect: '未选择开发语言',
        save: '保存',
        complete: '完成',
        collect_group: '收集组',
        turn_on_tip: '请先启用 Localization Editor 工具 ',
        turn_on: '启用 Localization Editor',
        turn_off_warning: '关闭后所有的翻译数据及配置将被清空，确定要关闭？',
        turn_off: '关闭 L10N',
        delete_data: '清空数据',
        delete_data_warning: '清空后翻译的数据将会永久丢失，确定要清空数据？',
        export: '导出',
        export_all: '导出全部',
    },
    translate: {
        source_string_placeholder: '请输入资源的 URL 上将被替换的内容',
        dist_string_placeholder: '请输入资源的 URL 上替换后的内容',
        source_string: '查找内容：',
        dist_string: '目标内容：',
        new_value: '新值',
        old_value: '原值',
        import_po: '导入 PO 文件',
        export_po: '导出 PO 文件',
        save: '保存',
        unfilled: '未填充',
        untranslated: '未翻译',
        filled: '已填充',
        count: '字数:',
        translate: '翻译',
        translated: '已翻译',
        key: '唯一标识符',
        'key:': '唯一标识符:',
        origin: '原文',
        target: '译文',
        import_all: '智能匹配',
        import_file: '导入文件',
        import: '导入',
        jump: '跳过',
        'position:': '位置:',
        reference_uuid: '引用的节点的 uuid:',
        variant: '变体',
        after_variant: '变体后',
        standard: '标准',
        delete_variant: '删除变体',
        cancel: '取消',
        confirm: '确定',
        cover: '覆盖',
        conflict_dialog_title: '注意：',
        conflict_dialog_content: '【已翻译】里已存在以下数据，覆盖后原数据将会消失。确定要覆盖吗',
        unsaved_warning: '当前翻译的内容是否需要保存?',
        delete_warning: '确定删除吗?',
        auto_import_warning: '即将对{length}个文件进行智能匹配， 匹配后会使用 {targetLocale} (目标语言)替换 {localLocale} (源语言) ，确定要执行？',
        quit_warning: '尚有未保存的内容, 确定退出吗？',
        import_tab_title: '导入的文件',
        import_file_conflicts_with_file_warning: '{num}个数据因为key相同导致其无法导入，请问如何处理',
        saving_tips: '进行中...',
    },
    language_code: {
        'af': '南非荷兰语',
        'af-ZA': '南非荷兰语（南非）',
        'af-NA': '南非荷兰语（纳米比亚）',
        'agq': '亚罕语',
        'agq-CM': '亚罕语（喀麦隆）',
        'ak': '阿肯语',
        'ak-GH': '阿肯语（加纳）',
        'am': '阿姆哈拉语',
        'am-ET': '阿姆哈拉语（埃塞俄比亚）',
        'ar': '阿拉伯语',
        'ar-YE': '阿拉伯语（也门）',
        'ar-TN': '阿拉伯语（突尼斯）',
        'ar-TD': '阿拉伯语（乍得）',
        'ar-SY': '阿拉伯语（叙利亚）',
        'ar-SS': '阿拉伯语（南苏丹）',
        'ar-SO': '阿拉伯语（索马里）',
        'ar-SD': '阿拉伯语（苏丹）',
        'ar-SA': '阿拉伯语（沙特阿拉伯）',
        'ar-QA': '阿拉伯语（卡塔尔）',
        'ar-PS': '阿拉伯语（巴勒斯坦领土）',
        'ar-OM': '阿拉伯语（阿曼）',
        'ar-MR': '阿拉伯语（毛里塔尼亚）',
        'ar-MA': '阿拉伯语（摩洛哥）',
        'ar-LY': '阿拉伯语（利比亚）',
        'ar-LB': '阿拉伯语（黎巴嫩）',
        'ar-KW': '阿拉伯语（科威特）',
        'ar-KM': '阿拉伯语（科摩罗）',
        'ar-JO': '阿拉伯语（约旦）',
        'ar-IQ': '阿拉伯语（伊拉克）',
        'ar-IL': '阿拉伯语（以色列）',
        'ar-ER': '阿拉伯语（厄立特里亚）',
        'ar-EH': '阿拉伯语（西撒哈拉）',
        'ar-EG': '阿拉伯语（埃及）',
        'ar-DZ': '阿拉伯语（阿尔及利亚）',
        'ar-DJ': '阿拉伯语（吉布提）',
        'ar-BH': '阿拉伯语（巴林）',
        'ar-AE': '阿拉伯语（阿拉伯联合酋长国）',
        'ar-001': '现代标准阿拉伯语',
        'as': '阿萨姆语',
        'as-IN': '阿萨姆语（印度）',
        'asa': '帕雷语',
        'asa-TZ': '帕雷语（坦桑尼亚）',
        'ast': '阿斯图里亚斯语',
        'ast-ES': '阿斯图里亚斯语（西班牙）',
        'az': '阿塞拜疆语',
        'az-Latn-AZ': '阿塞拜疆语（拉丁文，阿塞拜疆）',
        'az-Latn': '阿塞拜疆语（拉丁文）',
        'az-Cyrl-AZ': '阿塞拜疆语（西里尔文，阿塞拜疆）',
        'az-Cyrl': '阿塞拜疆语（西里尔文）',
        'bas': '巴萨语',
        'bas-CM': '巴萨语（喀麦隆）',
        'be': '白俄罗斯语',
        'be-TARASK': '白俄罗斯语（Taraskievica 拼字）',
        'be-BY': '白俄罗斯语（白俄罗斯）',
        'bem': '本巴语',
        'bem-ZM': '本巴语（赞比亚）',
        'bez': '贝纳语',
        'bez-TZ': '贝纳语（坦桑尼亚）',
        'bg': '保加利亚语',
        'bg-BG': '保加利亚语（保加利亚）',
        'bm': '班巴拉语',
        'bm-ML': '班巴拉语（马里）',
        'bn': '孟加拉语',
        'bn-IN': '孟加拉语（印度）',
        'bn-BD': '孟加拉语（孟加拉国）',
        'br': '布列塔尼语',
        'br-FR': '布列塔尼语（法国）',
        'brx': '博多语',
        'brx-IN': '博多语（印度）',
        'bs': '波斯尼亚语',
        'bs-Latn-BA': '波斯尼亚语（拉丁文，波斯尼亚和黑塞哥维那）',
        'bs-Latn': '波斯尼亚语（拉丁文）',
        'bs-Cyrl-BA': '波斯尼亚语（西里尔文，波斯尼亚和黑塞哥维那）',
        'bs-Cyrl': '波斯尼亚语（西里尔文）',
        'ca': '加泰罗尼亚语',
        'ca-IT': '加泰罗尼亚语（意大利）',
        'ca-FR': '加泰罗尼亚语（法国）',
        'ca-ES-VALENCIA': '加泰罗尼亚语（西班牙，瓦伦西亚文）',
        'ca-ES': '加泰罗尼亚语（西班牙）',
        'ca-AD': '加泰罗尼亚语（安道尔）',
        'ccp': '查克玛语',
        'ccp-IN': '查克玛语（印度）',
        'ccp-BD': '查克玛语（孟加拉国）',
        'ce': '车臣语',
        'ce-RU': '车臣语（俄罗斯）',
        'ceb': '宿务语',
        'ceb-PH': '宿务语（菲律宾）',
        'cgg': '奇加语',
        'cgg-UG': '奇加语（乌干达）',
        'chr': '切罗基语',
        'chr-US': '切罗基语（美国）',
        'ckb': '中库尔德语',
        'ckb-IR': '中库尔德语（伊朗）',
        'ckb-IQ': '中库尔德语（伊拉克）',
        'cs': '捷克语',
        'cs-CZ': '捷克语（捷克）',
        'cy': '威尔士语',
        'cy-GB': '威尔士语（英国）',
        'da': '丹麦语',
        'da-GL': '丹麦语（格陵兰）',
        'da-DK': '丹麦语（丹麦）',
        'dav': '台塔语',
        'dav-KE': '台塔语（肯尼亚）',
        'de': '德语',
        'de-LU': '德语（卢森堡）',
        'de-LI': '德语（列支敦士登）',
        'de-IT': '德语（意大利）',
        'de-DE': '德语（德国）',
        'de-CH': '瑞士高地德语',
        'de-BE': '德语（比利时）',
        'de-AT': '奥地利德语',
        'dje': '哲尔马语',
        'dje-NE': '哲尔马语（尼日尔）',
        'doi': '多格拉语',
        'doi-IN': '多格拉语（印度）',
        'dsb': '下索布语',
        'dsb-DE': '下索布语（德国）',
        'dua': '杜阿拉语',
        'dua-CM': '杜阿拉语（喀麦隆）',
        'dyo': '朱拉语',
        'dyo-SN': '朱拉语（塞内加尔）',
        'dz': '宗卡语',
        'dz-BT': '宗卡语（不丹）',
        'ebu': '恩布语',
        'ebu-KE': '恩布语（肯尼亚）',
        'ee': '埃维语',
        'ee-TG': '埃维语（多哥）',
        'ee-GH': '埃维语（加纳）',
        'el': '希腊语',
        'el-GR': '希腊语（希腊）',
        'el-CY': '希腊语（塞浦路斯）',
        'en': '英语',
        'en-ZW': '英语（津巴布韦）',
        'en-ZM': '英语（赞比亚）',
        'en-ZA': '英语（南非）',
        'en-WS': '英语（萨摩亚）',
        'en-VU': '英语（瓦努阿图）',
        'en-VI': '英语（美属维尔京群岛）',
        'en-VG': '英语（英属维尔京群岛）',
        'en-VC': '英语（圣文森特和格林纳丁斯）',
        'en-US-POSIX': '美国英语（电脑）',
        'en-US': '美国英语',
        'en-UM': '英语（美国本土外小岛屿）',
        'en-UG': '英语（乌干达）',
        'en-TZ': '英语（坦桑尼亚）',
        'en-TV': '英语（图瓦卢）',
        'en-TT': '英语（特立尼达和多巴哥）',
        'en-TO': '英语（汤加）',
        'en-TK': '英语（托克劳）',
        'en-TC': '英语（特克斯和凯科斯群岛）',
        'en-SZ': '英语（斯威士兰）',
        'en-SX': '英语（荷属圣马丁）',
        'en-SS': '英语（南苏丹）',
        'en-SL': '英语（塞拉利昂）',
        'en-SI': '英语（斯洛文尼亚）',
        'en-SH': '英语（圣赫勒拿）',
        'en-SG': '英语（新加坡）',
        'en-SE': '英语（瑞典）',
        'en-SD': '英语（苏丹）',
        'en-SC': '英语（塞舌尔）',
        'en-SB': '英语（所罗门群岛）',
        'en-RW': '英语（卢旺达）',
        'en-PW': '英语（帕劳）',
        'en-PR': '英语（波多黎各）',
        'en-PN': '英语（皮特凯恩群岛）',
        'en-PK': '英语（巴基斯坦）',
        'en-PH': '英语（菲律宾）',
        'en-PG': '英语（巴布亚新几内亚）',
        'en-NZ': '英语（新西兰）',
        'en-NU': '英语（纽埃）',
        'en-NR': '英语（瑙鲁）',
        'en-NL': '英语（荷兰）',
        'en-NG': '英语（尼日利亚）',
        'en-NF': '英语（诺福克岛）',
        'en-NA': '英语（纳米比亚）',
        'en-MY': '英语（马来西亚）',
        'en-MW': '英语（马拉维）',
        'en-MV': '英语（马尔代夫）',
        'en-MU': '英语（毛里求斯）',
        'en-MT': '英语（马耳他）',
        'en-MS': '英语（蒙特塞拉特）',
        'en-MP': '英语（北马里亚纳群岛）',
        'en-MO': '英语（中国澳门特别行政区）',
        'en-MH': '英语（马绍尔群岛）',
        'en-MG': '英语（马达加斯加）',
        'en-LS': '英语（莱索托）',
        'en-LR': '英语（利比里亚）',
        'en-LC': '英语（圣卢西亚）',
        'en-KY': '英语（开曼群岛）',
        'en-KN': '英语（圣基茨和尼维斯）',
        'en-KI': '英语（基里巴斯）',
        'en-KE': '英语（肯尼亚）',
        'en-JM': '英语（牙买加）',
        'en-JE': '英语（泽西岛）',
        'en-IO': '英语（英属印度洋领地）',
        'en-IN': '英语（印度）',
        'en-IM': '英语（马恩岛）',
        'en-IL': '英语（以色列）',
        'en-IE': '英语（爱尔兰）',
        'en-HK': '英语（中国香港特别行政区）',
        'en-GY': '英语（圭亚那）',
        'en-GU': '英语（关岛）',
        'en-GM': '英语（冈比亚）',
        'en-GI': '英语（直布罗陀）',
        'en-GH': '英语（加纳）',
        'en-GG': '英语（根西岛）',
        'en-GD': '英语（格林纳达）',
        'en-GB': '英国英语',
        'en-FM': '英语（密克罗尼西亚）',
        'en-FK': '英语（福克兰群岛）',
        'en-FJ': '英语（斐济）',
        'en-FI': '英语（芬兰）',
        'en-ER': '英语（厄立特里亚）',
        'en-DM': '英语（多米尼克）',
        'en-DK': '英语（丹麦）',
        'en-DG': '英语（迪戈加西亚岛）',
        'en-DE': '英语（德国）',
        'en-CY': '英语（塞浦路斯）',
        'en-CX': '英语（圣诞岛）',
        'en-CM': '英语（喀麦隆）',
        'en-CK': '英语（库克群岛）',
        'en-CH': '英语（瑞士）',
        'en-CC': '英语（科科斯［基林］群岛）',
        'en-CA': '加拿大英语',
        'en-BZ': '英语（伯利兹）',
        'en-BW': '英语（博茨瓦纳）',
        'en-BS': '英语（巴哈马）',
        'en-BM': '英语（百慕大）',
        'en-BI': '英语（布隆迪）',
        'en-BE': '英语（比利时）',
        'en-BB': '英语（巴巴多斯）',
        'en-AU': '澳大利亚英语',
        'en-AT': '英语（奥地利）',
        'en-AS': '英语（美属萨摩亚）',
        'en-AI': '英语（安圭拉）',
        'en-AG': '英语（安提瓜和巴布达）',
        'en-AE': '英语（阿拉伯联合酋长国）',
        'en-150': '英语（欧洲）',
        'en-001': '英语（世界）',
        'eo': '世界语',
        'eo-001': '世界语（世界）',
        'es': '西班牙语',
        'es-VE': '西班牙语（委内瑞拉）',
        'es-UY': '西班牙语（乌拉圭）',
        'es-US': '西班牙语（美国）',
        'es-SV': '西班牙语（萨尔瓦多）',
        'es-PY': '西班牙语（巴拉圭）',
        'es-PR': '西班牙语（波多黎各）',
        'es-PH': '西班牙语（菲律宾）',
        'es-PE': '西班牙语（秘鲁）',
        'es-PA': '西班牙语（巴拿马）',
        'es-NI': '西班牙语（尼加拉瓜）',
        'es-MX': '墨西哥西班牙语',
        'es-IC': '西班牙语（加纳利群岛）',
        'es-HN': '西班牙语（洪都拉斯）',
        'es-GT': '西班牙语（危地马拉）',
        'es-GQ': '西班牙语（赤道几内亚）',
        'es-ES': '欧洲西班牙语',
        'es-EC': '西班牙语（厄瓜多尔）',
        'es-EA': '西班牙语（休达及梅利利亚）',
        'es-DO': '西班牙语（多米尼加共和国）',
        'es-CU': '西班牙语（古巴）',
        'es-CR': '西班牙语（哥斯达黎加）',
        'es-CO': '西班牙语（哥伦比亚）',
        'es-CL': '西班牙语（智利）',
        'es-BZ': '西班牙语（伯利兹）',
        'es-BR': '西班牙语（巴西）',
        'es-BO': '西班牙语（玻利维亚）',
        'es-AR': '西班牙语（阿根廷）',
        'es-419': '拉丁美洲西班牙语',
        'et': '爱沙尼亚语',
        'et-EE': '爱沙尼亚语（爱沙尼亚）',
        'eu': '巴斯克语',
        'eu-ES': '巴斯克语（西班牙）',
        'ewo': '埃翁多语',
        'ewo-CM': '埃翁多语（喀麦隆）',
        'fa': '波斯语',
        'fa-IR': '波斯语（伊朗）',
        'fa-AF': '达里语',
        'ff': '富拉语',
        'ff-Latn-SN': '富拉语（拉丁文，塞内加尔）',
        'ff-Latn-SL': '富拉语（拉丁文，塞拉利昂）',
        'ff-Latn-NG': '富拉语（拉丁文，尼日利亚）',
        'ff-Latn-NE': '富拉语（拉丁文，尼日尔）',
        'ff-Latn-MR': '富拉语（拉丁文，毛里塔尼亚）',
        'ff-Latn-LR': '富拉语（拉丁文，利比里亚）',
        'ff-Latn-GW': '富拉语（拉丁文，几内亚比绍）',
        'ff-Latn-GN': '富拉语（拉丁文，几内亚）',
        'ff-Latn-GM': '富拉语（拉丁文，冈比亚）',
        'ff-Latn-GH': '富拉语（拉丁文，加纳）',
        'ff-Latn-CM': '富拉语（拉丁文，喀麦隆）',
        'ff-Latn-BF': '富拉语（拉丁文，布基纳法索）',
        'ff-Latn': '富拉语（拉丁文）',
        'ff-Adlm-SN': '富拉语（阿德拉姆文，塞内加尔）',
        'ff-Adlm-SL': '富拉语（阿德拉姆文，塞拉利昂）',
        'ff-Adlm-NG': '富拉语（阿德拉姆文，尼日利亚）',
        'ff-Adlm-NE': '富拉语（阿德拉姆文，尼日尔）',
        'ff-Adlm-MR': '富拉语（阿德拉姆文，毛里塔尼亚）',
        'ff-Adlm-LR': '富拉语（阿德拉姆文，利比里亚）',
        'ff-Adlm-GW': '富拉语（阿德拉姆文，几内亚比绍）',
        'ff-Adlm-GN': '富拉语（阿德拉姆文，几内亚）',
        'ff-Adlm-GM': '富拉语（阿德拉姆文，冈比亚）',
        'ff-Adlm-GH': '富拉语（阿德拉姆文，加纳）',
        'ff-Adlm-CM': '富拉语（阿德拉姆文，喀麦隆）',
        'ff-Adlm-BF': '富拉语（阿德拉姆文，布基纳法索）',
        'ff-Adlm': '富拉语（阿德拉姆文）',
        'fi': '芬兰语',
        'fi-FI': '芬兰语（芬兰）',
        'fil': '菲律宾语',
        'fil-PH': '菲律宾语（菲律宾）',
        'fo': '法罗语',
        'fo-FO': '法罗语（法罗群岛）',
        'fo-DK': '法罗语（丹麦）',
        'fr': '法语',
        'fr-YT': '法语（马约特）',
        'fr-WF': '法语（瓦利斯和富图纳）',
        'fr-VU': '法语（瓦努阿图）',
        'fr-TN': '法语（突尼斯）',
        'fr-TG': '法语（多哥）',
        'fr-TD': '法语（乍得）',
        'fr-SY': '法语（叙利亚）',
        'fr-SN': '法语（塞内加尔）',
        'fr-SC': '法语（塞舌尔）',
        'fr-RW': '法语（卢旺达）',
        'fr-RE': '法语（留尼汪）',
        'fr-PM': '法语（圣皮埃尔和密克隆群岛）',
        'fr-PF': '法语（法属波利尼西亚）',
        'fr-NE': '法语（尼日尔）',
        'fr-NC': '法语（新喀里多尼亚）',
        'fr-MU': '法语（毛里求斯）',
        'fr-MR': '法语（毛里塔尼亚）',
        'fr-MQ': '法语（马提尼克）',
        'fr-ML': '法语（马里）',
        'fr-MG': '法语（马达加斯加）',
        'fr-MF': '法语（法属圣马丁）',
        'fr-MC': '法语（摩纳哥）',
        'fr-MA': '法语（摩洛哥）',
        'fr-LU': '法语（卢森堡）',
        'fr-KM': '法语（科摩罗）',
        'fr-HT': '法语（海地）',
        'fr-GQ': '法语（赤道几内亚）',
        'fr-GP': '法语（瓜德罗普）',
        'fr-GN': '法语（几内亚）',
        'fr-GF': '法语（法属圭亚那）',
        'fr-GA': '法语（加蓬）',
        'fr-FR': '法语（法国）',
        'fr-DZ': '法语（阿尔及利亚）',
        'fr-DJ': '法语（吉布提）',
        'fr-CM': '法语（喀麦隆）',
        'fr-CI': '法语（科特迪瓦）',
        'fr-CH': '瑞士法语',
        'fr-CG': '法语（刚果［布］）',
        'fr-CF': '法语（中非共和国）',
        'fr-CD': '法语（刚果［金］）',
        'fr-CA': '加拿大法语',
        'fr-BL': '法语（圣巴泰勒米）',
        'fr-BJ': '法语（贝宁）',
        'fr-BI': '法语（布隆迪）',
        'fr-BF': '法语（布基纳法索）',
        'fr-BE': '法语（比利时）',
        'fur': '弗留利语',
        'fur-IT': '弗留利语（意大利）',
        'fy': '西弗里西亚语',
        'fy-NL': '西弗里西亚语（荷兰）',
        'ga': '爱尔兰语',
        'ga-IE': '爱尔兰语（爱尔兰）',
        'ga-GB': '爱尔兰语（英国）',
        'gd': '苏格兰盖尔语',
        'gd-GB': '苏格兰盖尔语（英国）',
        'gl': '加利西亚语',
        'gl-ES': '加利西亚语（西班牙）',
        'gsw': '瑞士德语',
        'gsw-LI': '瑞士德语（列支敦士登）',
        'gsw-FR': '瑞士德语（法国）',
        'gsw-CH': '瑞士德语（瑞士）',
        'gu': '古吉拉特语',
        'gu-IN': '古吉拉特语（印度）',
        'guz': '古西语',
        'guz-KE': '古西语（肯尼亚）',
        'gv': '马恩语',
        'gv-IM': '马恩语（马恩岛）',
        'ha': '豪萨语',
        'ha-NG': '豪萨语（尼日利亚）',
        'ha-NE': '豪萨语（尼日尔）',
        'ha-GH': '豪萨语（加纳）',
        'haw': '夏威夷语',
        'haw-US': '夏威夷语（美国）',
        'he': '希伯来语',
        'he-IL': '希伯来语（以色列）',
        'hi': '印地语',
        'hi-Latn-IN': '印地语（拉丁文，印度）',
        'hi-Latn': '印地语（拉丁文）',
        'hi-IN': '印地语（印度）',
        'hr': '克罗地亚语',
        'hr-HR': '克罗地亚语（克罗地亚）',
        'hr-BA': '克罗地亚语（波斯尼亚和黑塞哥维那）',
        'hsb': '上索布语',
        'hsb-DE': '上索布语（德国）',
        'hu': '匈牙利语',
        'hu-HU': '匈牙利语（匈牙利）',
        'hy': '亚美尼亚语',
        'hy-AM': '亚美尼亚语（亚美尼亚）',
        'ia': '国际语',
        'ia-001': '国际语（世界）',
        'id': '印度尼西亚语',
        'id-ID': '印度尼西亚语（印度尼西亚）',
        'ig': '伊博语',
        'ig-NG': '伊博语（尼日利亚）',
        'is': '冰岛语',
        'is-IS': '冰岛语（冰岛）',
        'it': '意大利语',
        'it-VA': '意大利语（梵蒂冈）',
        'it-SM': '意大利语（圣马力诺）',
        'it-IT': '意大利语（意大利）',
        'it-CH': '意大利语（瑞士）',
        'ja': '日语',
        'ja-JP': '日语（日本）',
        'jgo': '恩艮巴语',
        'jgo-CM': '恩艮巴语（喀麦隆）',
        'jmc': '马切姆语',
        'jmc-TZ': '马切姆语（坦桑尼亚）',
        'jv': '爪哇语',
        'jv-ID': '爪哇语（印度尼西亚）',
        'ka': '格鲁吉亚语',
        'ka-GE': '格鲁吉亚语（格鲁吉亚）',
        'kab': '卡拜尔语',
        'kab-DZ': '卡拜尔语（阿尔及利亚）',
        'kam': '卡姆巴语',
        'kam-KE': '卡姆巴语（肯尼亚）',
        'kde': '马孔德语',
        'kde-TZ': '马孔德语（坦桑尼亚）',
        'kea': '卡布佛得鲁语',
        'kea-CV': '卡布佛得鲁语（佛得角）',
        'kgp': 'kgp',
        'kgp-BR': 'kgp（巴西）',
        'khq': '西桑海语',
        'khq-ML': '西桑海语（马里）',
        'ki': '吉库尤语',
        'ki-KE': '吉库尤语（肯尼亚）',
        'kk': '哈萨克语',
        'kk-KZ': '哈萨克语（哈萨克斯坦）',
        'kkj': '卡库语',
        'kkj-CM': '卡库语（喀麦隆）',
        'kl': '格陵兰语',
        'kl-GL': '格陵兰语（格陵兰）',
        'kln': '卡伦金语',
        'kln-KE': '卡伦金语（肯尼亚）',
        'km': '高棉语',
        'km-KH': '高棉语（柬埔寨）',
        'kn': '卡纳达语',
        'kn-IN': '卡纳达语（印度）',
        'ko': '韩语',
        'ko-KR': '韩语（韩国）',
        'ko-KP': '韩语（朝鲜）',
        'kok': '孔卡尼语',
        'kok-IN': '孔卡尼语（印度）',
        'ks': '克什米尔语',
        'ks-Deva-IN': '克什米尔语（天城文，印度）',
        'ks-Deva': '克什米尔语（天城文）',
        'ks-Arab-IN': '克什米尔语（阿拉伯文，印度）',
        'ks-Arab': '克什米尔语（阿拉伯文）',
        'ksb': '香巴拉语',
        'ksb-TZ': '香巴拉语（坦桑尼亚）',
        'ksf': '巴菲亚语',
        'ksf-CM': '巴菲亚语（喀麦隆）',
        'ksh': '科隆语',
        'ksh-DE': '科隆语（德国）',
        'ku': '库尔德语',
        'ku-TR': '库尔德语（土耳其）',
        'kw': '康沃尔语',
        'kw-GB': '康沃尔语（英国）',
        'ky': '柯尔克孜语',
        'ky-KG': '柯尔克孜语（吉尔吉斯斯坦）',
        'lag': '朗吉语',
        'lag-TZ': '朗吉语（坦桑尼亚）',
        'lb': '卢森堡语',
        'lb-LU': '卢森堡语（卢森堡）',
        'lg': '卢干达语',
        'lg-UG': '卢干达语（乌干达）',
        'lkt': '拉科塔语',
        'lkt-US': '拉科塔语（美国）',
        'ln': '林加拉语',
        'ln-CG': '林加拉语（刚果［布］）',
        'ln-CF': '林加拉语（中非共和国）',
        'ln-CD': '林加拉语（刚果［金］）',
        'ln-AO': '林加拉语（安哥拉）',
        'lo': '老挝语',
        'lo-LA': '老挝语（老挝）',
        'lrc': '北卢尔语',
        'lrc-IR': '北卢尔语（伊朗）',
        'lrc-IQ': '北卢尔语（伊拉克）',
        'lt': '立陶宛语',
        'lt-LT': '立陶宛语（立陶宛）',
        'lu': '鲁巴加丹加语',
        'lu-CD': '鲁巴加丹加语（刚果［金］）',
        'luo': '卢奥语',
        'luo-KE': '卢奥语（肯尼亚）',
        'luy': '卢雅语',
        'luy-KE': '卢雅语（肯尼亚）',
        'lv': '拉脱维亚语',
        'lv-LV': '拉脱维亚语（拉脱维亚）',
        'mai': '迈蒂利语',
        'mai-IN': '迈蒂利语（印度）',
        'mas': '马赛语',
        'mas-TZ': '马赛语（坦桑尼亚）',
        'mas-KE': '马赛语（肯尼亚）',
        'mer': '梅鲁语',
        'mer-KE': '梅鲁语（肯尼亚）',
        'mfe': '毛里求斯克里奥尔语',
        'mfe-MU': '毛里求斯克里奥尔语（毛里求斯）',
        'mg': '马拉加斯语',
        'mg-MG': '马拉加斯语（马达加斯加）',
        'mgh': '马库阿语',
        'mgh-MZ': '马库阿语（莫桑比克）',
        'mgo': '梅塔语',
        'mgo-CM': '梅塔语（喀麦隆）',
        'mi': '毛利语',
        'mi-NZ': '毛利语（新西兰）',
        'mk': '马其顿语',
        'mk-MK': '马其顿语（北马其顿）',
        'ml': '马拉雅拉姆语',
        'ml-IN': '马拉雅拉姆语（印度）',
        'mn': '蒙古语',
        'mn-MN': '蒙古语（蒙古）',
        'mni': '曼尼普尔语',
        'mni-Beng-IN': '曼尼普尔语（孟加拉文，印度）',
        'mni-Beng': '曼尼普尔语（孟加拉文）',
        'mr': '马拉地语',
        'mr-IN': '马拉地语（印度）',
        'ms': '马来语',
        'ms-SG': '马来语（新加坡）',
        'ms-MY': '马来语（马来西亚）',
        'ms-ID': '马来语（印度尼西亚）',
        'ms-BN': '马来语（文莱）',
        'mt': '马耳他语',
        'mt-MT': '马耳他语（马耳他）',
        'mua': '蒙当语',
        'mua-CM': '蒙当语（喀麦隆）',
        'my': '缅甸语',
        'my-MM': '缅甸语（缅甸）',
        'mzn': '马赞德兰语',
        'mzn-IR': '马赞德兰语（伊朗）',
        'naq': '纳马语',
        'naq-NA': '纳马语（纳米比亚）',
        'nb': '书面挪威语',
        'nb-SJ': '书面挪威语（斯瓦尔巴和扬马延）',
        'nb-NO': '书面挪威语（挪威）',
        'nd': '北恩德贝勒语',
        'nd-ZW': '北恩德贝勒语（津巴布韦）',
        'nds': '低地德语',
        'nds-NL': '低萨克森语',
        'nds-DE': '低地德语（德国）',
        'ne': '尼泊尔语',
        'ne-NP': '尼泊尔语（尼泊尔）',
        'ne-IN': '尼泊尔语（印度）',
        'nl': '荷兰语',
        'nl-SX': '荷兰语（荷属圣马丁）',
        'nl-SR': '荷兰语（苏里南）',
        'nl-NL': '荷兰语（荷兰）',
        'nl-CW': '荷兰语（库拉索）',
        'nl-BQ': '荷兰语（荷属加勒比区）',
        'nl-BE': '弗拉芒语',
        'nl-AW': '荷兰语（阿鲁巴）',
        'nmg': '夸西奥语',
        'nmg-CM': '夸西奥语（喀麦隆）',
        'nn': '挪威尼诺斯克语',
        'nn-NO': '挪威尼诺斯克语（挪威）',
        'nnh': '恩甘澎语',
        'nnh-CM': '恩甘澎语（喀麦隆）',
        'no': '挪威语',
        'nus': '努埃尔语',
        'nus-SS': '努埃尔语（南苏丹）',
        'nyn': '尼昂科勒语',
        'nyn-UG': '尼昂科勒语（乌干达）',
        'om': '奥罗莫语',
        'om-KE': '奥罗莫语（肯尼亚）',
        'om-ET': '奥罗莫语（埃塞俄比亚）',
        'or': '奥里亚语',
        'or-IN': '奥里亚语（印度）',
        'os': '奥塞梯语',
        'os-RU': '奥塞梯语（俄罗斯）',
        'os-GE': '奥塞梯语（格鲁吉亚）',
        'pa': '旁遮普语',
        'pa-Guru-IN': '旁遮普语（果鲁穆奇文，印度）',
        'pa-Guru': '旁遮普语（果鲁穆奇文）',
        'pa-Arab-PK': '旁遮普语（阿拉伯文，巴基斯坦）',
        'pa-Arab': '旁遮普语（阿拉伯文）',
        'pcm': '尼日利亚皮钦语',
        'pcm-NG': '尼日利亚皮钦语（尼日利亚）',
        'pl': '波兰语',
        'pl-PL': '波兰语（波兰）',
        'ps': '普什图语',
        'ps-PK': '普什图语（巴基斯坦）',
        'ps-AF': '普什图语（阿富汗）',
        'pt': '葡萄牙语',
        'pt-TL': '葡萄牙语（东帝汶）',
        'pt-ST': '葡萄牙语（圣多美和普林西比）',
        'pt-PT': '欧洲葡萄牙语',
        'pt-MZ': '葡萄牙语（莫桑比克）',
        'pt-MO': '葡萄牙语（中国澳门特别行政区）',
        'pt-LU': '葡萄牙语（卢森堡）',
        'pt-GW': '葡萄牙语（几内亚比绍）',
        'pt-GQ': '葡萄牙语（赤道几内亚）',
        'pt-CV': '葡萄牙语（佛得角）',
        'pt-CH': '葡萄牙语（瑞士）',
        'pt-BR': '巴西葡萄牙语',
        'pt-AO': '葡萄牙语（安哥拉）',
        'qu': '克丘亚语',
        'qu-PE': '克丘亚语（秘鲁）',
        'qu-EC': '克丘亚语（厄瓜多尔）',
        'qu-BO': '克丘亚语（玻利维亚）',
        'rm': '罗曼什语',
        'rm-CH': '罗曼什语（瑞士）',
        'rn': '隆迪语',
        'rn-BI': '隆迪语（布隆迪）',
        'ro': '罗马尼亚语',
        'ro-RO': '罗马尼亚语（罗马尼亚）',
        'ro-MD': '摩尔多瓦语',
        'rof': '兰博语',
        'rof-TZ': '兰博语（坦桑尼亚）',
        'ru': '俄语',
        'ru-UA': '俄语（乌克兰）',
        'ru-RU': '俄语（俄罗斯）',
        'ru-MD': '俄语（摩尔多瓦）',
        'ru-KZ': '俄语（哈萨克斯坦）',
        'ru-KG': '俄语（吉尔吉斯斯坦）',
        'ru-BY': '俄语（白俄罗斯）',
        'rw': '卢旺达语',
        'rw-RW': '卢旺达语（卢旺达）',
        'rwk': '罗瓦语',
        'rwk-TZ': '罗瓦语（坦桑尼亚）',
        'sa': '梵语',
        'sa-IN': '梵语（印度）',
        'sah': '萨哈语',
        'sah-RU': '萨哈语（俄罗斯）',
        'saq': '桑布鲁语',
        'saq-KE': '桑布鲁语（肯尼亚）',
        'sat': '桑塔利语',
        'sat-Olck-IN': '桑塔利语（桑塔利文，印度）',
        'sat-Olck': '桑塔利语（桑塔利文）',
        'sbp': '桑古语',
        'sbp-TZ': '桑古语（坦桑尼亚）',
        'sc': '萨丁语',
        'sc-IT': '萨丁语（意大利）',
        'sd': '信德语',
        'sd-Deva-IN': '信德语（天城文，印度）',
        'sd-Deva': '信德语（天城文）',
        'sd-Arab-PK': '信德语（阿拉伯文，巴基斯坦）',
        'sd-Arab': '信德语（阿拉伯文）',
        'se': '北方萨米语',
        'se-SE': '北方萨米语（瑞典）',
        'se-NO': '北方萨米语（挪威）',
        'se-FI': '北方萨米语（芬兰）',
        'seh': '塞纳语',
        'seh-MZ': '塞纳语（莫桑比克）',
        'ses': '东桑海语',
        'ses-ML': '东桑海语（马里）',
        'sg': '桑戈语',
        'sg-CF': '桑戈语（中非共和国）',
        'shi': '希尔哈语',
        'shi-Tfng-MA': '希尔哈语（提非纳文，摩洛哥）',
        'shi-Tfng': '希尔哈语（提非纳文）',
        'shi-Latn-MA': '希尔哈语（拉丁文，摩洛哥）',
        'shi-Latn': '希尔哈语（拉丁文）',
        'si': '僧伽罗语',
        'si-LK': '僧伽罗语（斯里兰卡）',
        'sk': '斯洛伐克语',
        'sk-SK': '斯洛伐克语（斯洛伐克）',
        'sl': '斯洛文尼亚语',
        'sl-SI': '斯洛文尼亚语（斯洛文尼亚）',
        'smn': '伊纳里萨米语',
        'smn-FI': '伊纳里萨米语（芬兰）',
        'sn': '绍纳语',
        'sn-ZW': '绍纳语（津巴布韦）',
        'so': '索马里语',
        'so-SO': '索马里语（索马里）',
        'so-KE': '索马里语（肯尼亚）',
        'so-ET': '索马里语（埃塞俄比亚）',
        'so-DJ': '索马里语（吉布提）',
        'sq': '阿尔巴尼亚语',
        'sq-XK': '阿尔巴尼亚语（科索沃）',
        'sq-MK': '阿尔巴尼亚语（北马其顿）',
        'sq-AL': '阿尔巴尼亚语（阿尔巴尼亚）',
        'sr': '塞尔维亚语',
        'sr-Latn-XK': '塞尔维亚语（拉丁文，科索沃）',
        'sr-Latn-RS': '塞尔维亚语（拉丁文，塞尔维亚）',
        'sr-Latn-ME': '塞尔维亚语（拉丁文，黑山）',
        'sr-Latn-BA': '塞尔维亚语（拉丁文，波斯尼亚和黑塞哥维那）',
        'sr-Latn': '塞尔维亚语（拉丁文）',
        'sr-Cyrl-XK': '塞尔维亚语（西里尔文，科索沃）',
        'sr-Cyrl-RS': '塞尔维亚语（西里尔文，塞尔维亚）',
        'sr-Cyrl-ME': '塞尔维亚语（西里尔文，黑山）',
        'sr-Cyrl-BA': '塞尔维亚语（西里尔文，波斯尼亚和黑塞哥维那）',
        'sr-Cyrl': '塞尔维亚语（西里尔文）',
        'su': '巽他语',
        'su-Latn-ID': '巽他语（拉丁文，印度尼西亚）',
        'su-Latn': '巽他语（拉丁文）',
        'sv': '瑞典语',
        'sv-SE': '瑞典语（瑞典）',
        'sv-FI': '瑞典语（芬兰）',
        'sv-AX': '瑞典语（奥兰群岛）',
        'sw': '斯瓦希里语',
        'sw-UG': '斯瓦希里语（乌干达）',
        'sw-TZ': '斯瓦希里语（坦桑尼亚）',
        'sw-KE': '斯瓦希里语（肯尼亚）',
        'sw-CD': '刚果斯瓦希里语',
        'ta': '泰米尔语',
        'ta-SG': '泰米尔语（新加坡）',
        'ta-MY': '泰米尔语（马来西亚）',
        'ta-LK': '泰米尔语（斯里兰卡）',
        'ta-IN': '泰米尔语（印度）',
        'te': '泰卢固语',
        'te-IN': '泰卢固语（印度）',
        'teo': '特索语',
        'teo-UG': '特索语（乌干达）',
        'teo-KE': '特索语（肯尼亚）',
        'tg': '塔吉克语',
        'tg-TJ': '塔吉克语（塔吉克斯坦）',
        'th': '泰语',
        'th-TH': '泰语（泰国）',
        'ti': '提格利尼亚语',
        'ti-ET': '提格利尼亚语（埃塞俄比亚）',
        'ti-ER': '提格利尼亚语（厄立特里亚）',
        'tk': '土库曼语',
        'tk-TM': '土库曼语（土库曼斯坦）',
        'to': '汤加语',
        'to-TO': '汤加语（汤加）',
        'tr': '土耳其语',
        'tr-TR': '土耳其语（土耳其）',
        'tr-CY': '土耳其语（塞浦路斯）',
        'tt': '鞑靼语',
        'tt-RU': '鞑靼语（俄罗斯）',
        'twq': '北桑海语',
        'twq-NE': '北桑海语（尼日尔）',
        'tzm': '塔马齐格特语',
        'tzm-MA': '塔马齐格特语（摩洛哥）',
        'ug': '维吾尔语',
        'ug-CN': '维吾尔语（中国）',
        'uk': '乌克兰语',
        'uk-UA': '乌克兰语（乌克兰）',
        'ur': '乌尔都语',
        'ur-PK': '乌尔都语（巴基斯坦）',
        'ur-IN': '乌尔都语（印度）',
        'uz': '乌兹别克语',
        'uz-Latn-UZ': '乌兹别克语（拉丁文，乌兹别克斯坦）',
        'uz-Latn': '乌兹别克语（拉丁文）',
        'uz-Cyrl-UZ': '乌兹别克语（西里尔文，乌兹别克斯坦）',
        'uz-Cyrl': '乌兹别克语（西里尔文）',
        'uz-Arab-AF': '乌兹别克语（阿拉伯文，阿富汗）',
        'uz-Arab': '乌兹别克语（阿拉伯文）',
        'vai': '瓦伊语',
        'vai-Vaii-LR': '瓦伊语（瓦依文，利比里亚）',
        'vai-Vaii': '瓦伊语（瓦依文）',
        'vai-Latn-LR': '瓦伊语（拉丁文，利比里亚）',
        'vai-Latn': '瓦伊语（拉丁文）',
        'vi': '越南语',
        'vi-VN': '越南语（越南）',
        'vun': '温旧语',
        'vun-TZ': '温旧语（坦桑尼亚）',
        'wae': '瓦尔瑟语',
        'wae-CH': '瓦尔瑟语（瑞士）',
        'wo': '沃洛夫语',
        'wo-SN': '沃洛夫语（塞内加尔）',
        'xh': '科萨语',
        'xh-ZA': '科萨语（南非）',
        'xog': '索加语',
        'xog-UG': '索加语（乌干达）',
        'yav': '洋卞语',
        'yav-CM': '洋卞语（喀麦隆）',
        'yi': '意第绪语',
        'yi-001': '意第绪语（世界）',
        'yo': '约鲁巴语',
        'yo-NG': '约鲁巴语（尼日利亚）',
        'yo-BJ': '约鲁巴语（贝宁）',
        'yrl': 'yrl',
        'yrl-VE': 'yrl（委内瑞拉）',
        'yrl-CO': 'yrl（哥伦比亚）',
        'yrl-BR': 'yrl（巴西）',
        'zgh': '标准摩洛哥塔马塞特语',
        'zgh-MA': '标准摩洛哥塔马塞特语（摩洛哥）',
        'zh': '中文',
        'zh-Hans-CN': '简体中文（中国）',
        'zh-Hans-HK': '简体中文（中国香港特别行政区）',
        'zh-Hans-MO': '简体中文（中国澳门特别行政区）',
        'zh-Hans-SG': '简体中文（新加坡）',
        'zh-Hans': '简体中文',
        'zh-Hant-TW': '繁体中文（中国台湾）',
        'zh-Hant-MO': '繁体中文（中国澳门特别行政区）',
        'zh-Hant-HK': '繁体中文（中国香港特别行政区）',
        'zh-Hant': '繁体中文',
        'zu': '祖鲁语',
        'zu-ZA': '祖鲁语（南非）',
    },
    error: {
        'editor_dirty': '当前检测到未保存的内容，请先保存项目',
        'translate_api_error': '翻译请求错误，请反馈给对应平台',
        'unknown_file_type': '未知文件类型： {}',
        'target_translate_data_not_found': '未找到目标语言： {}',
        'target_translate_data_exist': '目标语言已存在： {}',
        'local_language_not_set': '没有本地开发语言集',
        'translate_provider_config_not_found': '翻译人员证书未设置',
        'provider_tag_not_found': '请先选择一种服务商识别语言',
        'translate_item_not_found': '没有发现翻译数据： {}',
        'scan_option_empty': '扫描选项为空',
        'provider_input_error': '{}',
        'auto_translate_network_error': '网络错误： {}',
        'po_file_language_not_equal': '导入的PO文件的 [Language] 不等于目标语言',
        'unavailable_csv_file': 'CSV文件不可用 {}',
        'unavailable_xlsx_file': 'XLSX文件不可用 {}',
        'unknown_error': '未知错误',
        'merge_different_key': '尝试用两个不同的键合并数据',
        'index_translate_data_not_found': '数据损坏，没有找到 localization-editor/index.yaml',
        'scene_error': '未知场景错误，请尝试重新导入插件资源或重新启动编辑器',
        'invalid_translate_data': '无效的翻译数据: {}',
        'invalid_translate_file_content': '无效的翻译文件内容: {}',
        "YOUDAO": {
            'error': 'YouDao 报错: {errorCode}, {message}',
            'errorCode': 'YouDao 报错码: {errorCode}, 请查看 https://ai.youdao.com/DOCSIRMA/html/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E7%BF%BB%E8%AF%91/API%E6%96%87%E6%A1%A3/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1/%E6%96%87%E6%9C%AC%E7%BF%BB%E8%AF%91%E6%9C%8D%E5%8A%A1-API%E6%96%87%E6%A1%A3.html 中 [错误代码列表] 对应的信息',
            '207': '重放请求',
            '301': '辞典查询失败',
            '302': '翻译查询失败',
            '1412': '超过最大识别字节数',
            '2004': '合成字符过长',
            '2412': '超过最大请求字符数',
            '3412': '超过最大请求字符数',
        }
    },

};

