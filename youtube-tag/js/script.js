// 緊急走行
const EMERGENCY_RUN = 1;

// ヘリ救助
const HELICOPTER_RESCUE = 2;

// 駐屯地創立記念行事
const OPEN_BASE = 3;

// 航空祭
const AIR_SHOW = 4;

// 動画タイプ選択肢
const content_type_items = [
    { value: EMERGENCY_RUN, name: "緊急走行" },
    { value: HELICOPTER_RESCUE, name: "ヘリコプター救助" },
    { value: OPEN_BASE, name: "駐屯地創立記念行事" },
    { value: AIR_SHOW, name: "航空祭" },
];

// 入力項目群
const input_keyword_items = [
    { name: "keyword1", label: "本部・部隊1", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword2", label: "本部・部隊2", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword3", label: "本部・部隊3", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword4", label: "本部・部隊4", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword5", label: "本部・部隊5", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword6", label: "本部・部隊1（英）", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword7", label: "本部・部隊2（英）", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword8", label: "本部・部隊3（英）", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword9", label: "本部・部隊4（英）", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword10", label: "本部・部隊5（英）", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword11", label: "レジ番", type: [HELICOPTER_RESCUE] },
    { name: "keyword12", label: "イベント", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword13", label: "演目", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword14", label: "乗り物1", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword15", label: "乗り物2", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword16", label: "乗り物3", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword17", label: "乗り物4", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword18", label: "乗り物5", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword19", label: "乗り物6", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword20", label: "乗り物7", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword21", label: "乗り物8", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword22", label: "乗り物9", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword23", label: "乗り物10", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword24", label: "フリーワード1", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword25", label: "フリーワード2", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword26", label: "フリーワード3", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword27", label: "フリーワード4", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
    { name: "keyword28", label: "フリーワード5", type: [EMERGENCY_RUN,HELICOPTER_RESCUE,OPEN_BASE,AIR_SHOW] },
];


const { createApp } = Vue

createApp({
    data() {
        let inputs = [];
        for (var i = 0; i < input_keyword_items.length; i++) {
            inputs.push("");
        }
        return {
            // 入力キーワード
            inputs: inputs,
            // 動画タイプ（初期選択）
            content_type_value: EMERGENCY_RUN,
            // 動画タイプ選択肢
            content_type_items: content_type_items,
            // 入力項目群
            input_keyword_items: input_keyword_items,
            // タグ
            tag: null,
        }
    },
    mounted: function () {
        let that = this;
    },
    methods: {
        onChangeContentType () {
            let that = this;
            let inputs = that.inputs;
            inputs = inputs.map(elm => {
                return elm = ""
              });
            that.inputs = inputs;
            that.tag = null;
        },
        onChangeInput() {
            let that = this;
            let content_type_value = that.content_type_value
            let keywords = that.inputs;
            that.tag = generateTag(content_type_value, keywords);
        },
    }
}).mount('#app');

/**
 * タグ生成
 * @param {*} content_type
 */
function generateTag(content_type, keywords) {
    let result = "";

    switch (content_type) {
        case EMERGENCY_RUN:
            var fixed_keywords = [
                "緊急走行",
                "Responding",
                "緊急車両",
                "Emergency vehicle",
                "サイレン",
                "Siren",
                "防災訓練",
                "Emergency training",
            ];
            break;
        case HELICOPTER_RESCUE:
            var fixed_keywords = [
                "防災訓練",
                "Emergency training",
            ];
            break;
        case OPEN_BASE:
            var fixed_keywords = [
                "",
                "",
            ];
            break;
        case AIR_SHOW:
            var fixed_keywords = [
                "",
                "",
            ];
            break;
    }

    for (var i = 0; i < fixed_keywords.length; i++) {
        result += fixed_keywords[i] + ",";
    }

    for (var i = 0; i < keywords.length; i++) {
        if (keywords[i] == "") {
            continue;
        }
        result += keywords[i] + ",";
    }

    if(result.slice(-1) === ','){
        result = result.slice(0, -1);
    }

    return result;
}
