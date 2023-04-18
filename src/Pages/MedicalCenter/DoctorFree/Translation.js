let initialTranslation = {
    "ar": {
        placeholder: 'البحث بالإسم  أو البريد الإلكتروني أو الهاتف .....',
        FilterStatus: [
            { value: "All", text: "الكل" },
            { value: "PENDING", text: " قيد الانتظار  " },
            { value: "ACTIVE", text: "   نشــط  " },
            { value: "CANCELLED", text: " الغاء  " },
            { value: "SOLD", text: " مُبــاع  " },
            { value: "REJECTED", text: "مرفـوض" },
            { value: "RESERVED", text: " محجــوز  " }
        ],
        TableHeader: [
            " معلومات الطبيب",
            "دولة",
            "نوع الطبيب",
            "ميزان الطبيب",
            "حالة",
            "تاريخ الإنشاء",
            "الإجراء",
        ],
        store: {
            nav1: 'منتجات حيوانية', nav2: 'تفاصيل المنتج',
            nav3: 'تفاصيل المنتج', nav4: 'تفاصيل الدردشة',
            header1: 'معلومات المنتج',
            category: 'فئة',
            subCategory: 'تصنيف فرعي',
            type: 'نوع المنتج',
            cinfo: 'معلومات العميل',
            buyerInfo: 'معلومات المشتري',
            name: 'إســم',
            phone: 'هاتف',
            city: 'مدينة',
            price: 'سعر',
            age: 'عمر',
            gender: 'نوع الجنس',
            size: 'مقاس',
            bagging: 'تكييس',
            cutting: 'قطع',
            delivery: 'توصيل',
            whatsapp: 'واتس اب',
            status: 'حالة',
            des: 'وصف المنتج',
            gallery: 'معرض المنتجات',
            chatTitle: 'دردشة المشتري',
            chat: [
                'إســم المشتري',
                'هاتف',
                'الحالــة'
            ],
            headerChat: 'تفاصيل المحادثـــة  ',
            hello: 'مرحباً',
            rout: 'مسؤل',
            chatEmpty: 'هذه المحادثـــة فارغة..',
            requestsTitle: 'طلبات المنتجات الحيوانية',
            Requests: [
                'معلومات المشتري',
                'سعر',
                'رسوم القطع',
                'رسوم التعبئة',
                'رسوم التوصيل',
                'طلب توصيل',
                'السعر الكلي',
                'ملحوظة',
                'حالة',
            ]

        },
        filter: {
            Country: 'حدد الدولة',
            allCountry: 'بلدان',
            city: ' حدد منطقة  ',
            allCity: 'المناطق',
            area: 'حدد مدينه',
            allarea: 'مدن',
            Product: 'نوع المنتج',
            Products: '  أنواع المنتجات الحيوانية  ',
            status: 'حدد الحالة',
            allStatus: 'كل الحالة',
            SubCategory: 'حدد الفئة الفرعية',
            allSubCategory: 'فئة الحيوانات',
            currency: 'ريال سعودي'

        },
        ExcelHeader: [
            "اسم الطبيب",
            "هاتف الطبيب",
            "البريد الإلكتروني للطبيب",
            "دولة",
            "نوع الطبيب     ",
            "حساب الطبيب",
            "حالة ",
            "تاريخ الإنشاء ",
        ],

        excelSheet: ' تصدير إلى ملف إكسل',
        filename: '  بيانات الأطباء الحرة',
    },
    "en": {
        placeholder: 'Search by client name or email or phone.....',
        FilterStatus: [
            { value: "All", text: "All" },
            { value: "PENDING", text: " Pending  " },
            { value: "ACTIVE", text: "   Active  " },
            { value: "CANCELLED", text: " Cancelled  " },
            { value: "SOLD", text: " Sold  " },
            { value: "REJECTED", text: "Rejected" },
            { value: "RESERVED", text: " Reserved  " }
        ],
        TableHeader: [
            " Doctor Info",
            "Country",
            "Doctor Type     ",
            "Doctor Balance",
            "Status ",
            "Create Date ",
            "Action",

        ],
        store: {
            nav1: 'Animal Products', nav2: 'Product Details',
            nav3: 'Product Details', nav4: 'Chat Details',
            header1: 'Product Info',
            category: 'Category',
            subCategory: 'Sub Category',
            type: 'Product Type',
            cinfo: 'Client Info',
            buyerInfo: 'Buyer Info',
            name: 'Name',
            phone: 'Phone',
            city: 'City',
            price: 'Price',
            age: 'Age',
            gender: 'Gender',
            size: 'Size',
            bagging: 'Bagging',
            cutting: 'Cutting',
            delivery: 'Delivery',
            whatsapp: 'Whatsapp',
            status: 'Status',
            des: 'Product Description',
            gallery: 'Product Gallery',
            chatTitle: 'Buyer Chat',
            chat: [
                'Name',
                'Phone',
                'Status'
            ],
            headerChat: 'تفاصيل الاستشارة :',
            hello: 'مرحباً',
            rout: 'مسؤل',
            chatEmpty: 'هذه الاستشارة فارغة..',
            requestsTitle: 'Animal Product Requests',
            Requests: [
                'Buyer Info',
                'Price',
                'Cutting Fees',
                'Bagging Fees',
                'Delivery Fees',
                'Delivery Request',
                'Total Price',
                'Note',
                'Status',
            ]

        },
        filter: {
            Country: 'Select Country',
            allCountry: 'Countries',
            city: 'Select Area',
            allCity: 'Areas',
            area: 'Select City',
            allarea: 'Cities',
            Product: 'Product Type',
            Products: 'Animals Product Type',
            status: 'Select Status',
            allStatus: 'All Status',
            SubCategory: 'Select SubCategory',
            allSubCategory: 'Animals SubCategory',
            currency: 'SAR',

        },
        excelSheet: 'Export to excel sheet',
        filename: 'Doctors free data',
        ExcelHeader: [
            "Doctor name",
            "Doctor phone",
            "Doctor Email",
            "Country",
            "Doctor Type     ",
            "Doctor Balance",
            "Status ",
            "Create Date ",
        ],
    }
}

export default initialTranslation