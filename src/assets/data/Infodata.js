const InfoData = [
    {   
        id: 1,
        sold: 124,
        theloai:"Cổ tích & thần thoại",
        name: 'Nghìn Lẻ Một Đêm Và Văn Minh A Rập',
        intro1: 'Những câu chuyện tương truyền do nàng Sheherazade kể hầu bạo chúa Shariar trong nghìn lẻ một đêm là di sản tuyệt vời của sáng tác truyền khẩu dân gian nhân loại, tồn tại đến nay hơn nghìn năm.',
        intro2:' Đến đầu thế kỉ 18, một phần các câu chuyện được học giả Antonie Galland dịch từ tiếng A Rập sáng tiếng Pháp. Bản dịch mau chóng trở thành “dấu gạch kết nối văn hóa phương Đông và văn hóa phương Tây” chuyển tải nền văn minh A Rập từ xứ sở của nó lan tỏa khắp thế giới qua các bản dịch ra nhiều thứ tiếng ,làm cho công trình dệt gấm bằng từ ngữ của một vùng đất trở thành “tác phẩm văn học mang tính toàn cầu, tồn tại bất chấp thời gian',
        image:'https://topxephang.com/wp-content/uploads/2018/01/195056_p65986mnginlemotdem.jpg',
        price: 200000
    },
    {
        id: 2,
        sold: 30,
        theloai:"Tiểu thuyết",
        name:'Bố Già',
        intro1:'Thế giới ngầm được phản ánh trong tiểu thuyết Bố già là sự gặp gỡ giữa một bên là ý chí cương cường và nền tảng gia tộc chặt chẽ theo truyền thống Mafia xứ Sicily với một bên là xã hội Mỹ nhập nhằng đen trắng, mảnh đất màu mỡ cho những cơ hội làm ăn bất chính hứa hẹn những món lợi kếch xù. Trong thế giới ấy, hình tượng Bố già được tác giả dày công khắc họa đã trở thành bức chân dung bất hủ trong lòng người đọc.',
        intro2:'Từ một kẻ nhập cư tay trắng đến ông trùm tột đỉnh quyền uy, Don Vito Corleone là con rắn hổ mang thâm trầm, nguy hiểm khiến kẻ thù phải kiềng nể, e dè, nhưng cũng được bạn bè, thân quyến xem như một đấng toàn năng đầy nghĩa khí. Nhân vật trung tâm ấy đồng thời cũng là hiện thân của một pho triết lí rất “đời” được nhào nặn từ vốn sống của hàng chục năm lăn lộn giữa chốn giang hồ bao phen vào sinh ra tử.',
        image:'https://vnwriter.net/wp-content/uploads/2016/11/sach-bo-gia-216x300.gif',
        price: 175000
    },
    {
        id: 3,
        sold: 41,
        theloai:"Cổ tích & thần thoại",
        name:'Truyện Cổ Grimm',
        intro1:'Không có bạn nhỏ nào là không biết đến cô bé Lọ Lem, cô bé quàng khăn đỏ, chó sói và bảy chú dê con… Những nhân vật ấy bước ra từ bộ “Truyện Cổ Grimm”, một viên ngọc sáng lung linh trong kho tàng văn học truyện cổ tích thế giới. Với ngôn ngữ hài hước, nhẹ nhàng, tình tiết hấp dẫn, “Truyện Cổ Grimm” thu hút rất nhiều bạn nhỏ qua nhiều thế hệ.',
        intro2:'Được chọn lọc những câu chuyện đặc sắc và thú vị nhất trong bộ “Truyện Cổ Grimm”, chắc chắn cuốn sách sẽ mang lại cho các bạn nhỏ niềm vui, niềm khát khao khám phá trí thức và bồi dưỡng tâm hồn cho các em.',
        image:'https://topxephang.com/wp-content/uploads/2018/01/283089_p78580mtruyenco.jpg',
        price: 185000
    },
    {
        id: 4,
        sold: 341,
        theloai:"Tiểu thuyết",
        name:'Chúa Tể Những Chiếc Nhẫn',
        intro1:'Kỷ Đệ Nhất, các Valar kết liễu Morgoth.Kỷ Đệ Nhị, Tiên và Người đánh bại Sauron.Và nay, giữa Kỷ Đệ Tam tưởng đã hòa bình, báu vật của Sauron lại ngóc đầu trong lòng núi. Và thêm một anh chàng Hobbit bỗng thấy mình từ biệt tổ ấm yên bình, dấn vào cuộc phiêu lưu mỗi bước lại thêm xa, thêm gian nan, thêm hệ trọng.',
        intro2:'Bên cậu sát cánh Đoàn Hộ Nhẫn, Con Người cùng Phù Thủy, Tiên với Người Lùn, vượt đèo cả đầm sâu, qua rừng vàng mỏ tối, vào sinh ra tử hòng lần nữa cứu Trung Địa khỏi rơi vào tay CHÚA TỂ NHỮNG CHIẾC NHẪN.',
        image:'https://vnwriter.net/wp-content/uploads/2016/11/sach-chua-te-nhung-chiec-nhan-1-232x300.jpg',
        price: 225000
    },
    {
        id: 5,
        sold: 142,
        theloai:"Cổ tích & thần thoại",
        name:'Odyssey – Những Cuộc Phiêu Lưu Của Odysseus',
        intro1:'Sau khi cuộc chiến thành Troy kết thúc, các vị anh hùng của phe Hy Lạp lên đường trở về quê hương trong chiến thắng. Duy chỉ có Odysseus vẫn bặt vô âm tín suốt hơn mười năm ròng. Odyssey – Những cuộc phiêu lưu của Odysseus là hành trình trở về đầy gian nan của người anh hùng xứ Ithaca: trở thành tù nhân của nữ thần Calypso, đối mặt với cơn giận dữ của thần biển Poseidon, chiến đấu với những kẻ cầu hôn,…',
        intro2:'',
        image:'https://topxephang.com/wp-content/uploads/2018/01/276583_p77610modyssey.jpg',
        price: 160000
    },
    {
        id: 6,
        sold: 116,
        theloai:"Cổ tích & thần thoại",
        name:'Aeneid – Những Cuộc Phiêu Lưu Của Aeneas',
        intro1:'Sau khi thành Troy thất thủ, một người anh hùng của quân Troy đã cõng theo cha già, đưa vợ con thoát khỏi biển lửa, băng qua Địa Trung Hải, vượt nhiều vùng đất với bao gian nan thử thách để cuối cùng đến được nơi sau này chính là thành Rome. Vị anh hùng ấy là Aeneas, người vẫn được coi là tổ tiên của người La Mã.',
        intro2:'',
        image:'https://topxephang.com/wp-content/uploads/2018/01/276581_p77609maeneid.jpg',
        price: 150000
    },
    {
        id: 7,
        sold: 87,
        theloai:"Tiểu thuyết",
        name:'Forrest Gump',
        intro1:'Cuốn sách này được viết ra không nhằm cho ta một bài học về tài chính hay kinh doanh gì cả. Một cuốn sách được viết với phong cách nhẹ nhàng, đơn giản và dễ hiểu. Nó không cỗ vũ chúng ta tin vào số mệnh hay vận may rủi. Cuốn sách đơn giản cho chúng ta nhìn cuộc sống qua một lăng kính khác, lăng kính của một người có chỉ số IQ thấp, một người mà chúng ta cho rằng bất thường hơn so với số đông còn lại. Chúng ta biết và hiểu được cuộc sống cũng như cách suy nghĩ của Forrest Gump. Nhờ đó, ta thấy cuộc đời thực ra rất đơn giản, như cách mà Forrest Gump sống và trải nghiệm nó vậy.',
        intro2:'',
        image:'https://vnwriter.net/wp-content/uploads/2018/04/sach-forrest-gump-189x300.gif',
        price: 125000
    },
    {
        id: 8,
        sold: 49,
        theloai:"Cổ tích & thần thoại",
        name:'Theseus Và Cuộn Chỉ Của Ariadne',
        intro1:'Từ nguồn gốc của thần Zeus đến sự ra đời của Minos, từ mê cung dành cho Minotaur đến cuộc đối đầu giữa Minos và thành Athens, từ cơn giận dữ của Medea đến cuộc gặp giữa nàng Ariadne và Theseus… Thesus và cuộn chỉ của Ariadne chính là những câu chuyện đầu tiên dẫn dắt độc giả vào thế giới đầy cuốn hút của thần thoại Hy Lạp',
        intro2:'',
        image:'https://topxephang.com/wp-content/uploads/2018/01/276585_p77608mtheseus.jpg',
        price: 120000
    },
    {
        id: 9,
        sold: 211,
        theloai:"Cổ tích & thần thoại",
        name:'Thần Thoại La Mã',
        intro1:'Nghe những lời sấm truyền mách bảo, hoàng tử thành Troie là Énée, con trai của nữ thần tình yêu và sắc đẹp Vénus, cùng những chiến binh kiên cường đã quyết tâm tìm đến vùng đất Italie để tái sinh dân tộc, xây dựng đế chế hùng mạnh mới. Nhưng Junon – nữ hoàng của các vị thần vẫn luôn thù ghét và tìm cách ngăn cản bước chân Định mệnh đem tương lai xán lạn đến cho họ.',
        intro2:'Với cuốn sách Thần thoại La Mã, bạn đọc sẽ được sống trong những giây phút lịch sử hào hùng, chứng kiến hành trình gian khổ và hùng tráng của những anh hùng thành Troie. Liệu các thế lực thù địch, cả thần và người có ngăn cản, tiêu diệt được họ, hay người Troie sẽ giành được vận mệnh huy hoàng của mình?',
        image:'https://topxephang.com/wp-content/uploads/2018/01/244135_p73237mbiatruoc.jpg',
        price: 190000
    },
    {
        id: 10,
        sold: 118,
        theloai:"Tiểu thuyết",
        name:'Sự Im Lặng Của Bầy Cừu',
        intro1:'Sự Im Lặng Của Bầy Cừu kể về vụ án giết người hàng loạt xảy ra nhưng không để lại dấu vết. Điều kỳ lạ là Lecter – một bác sĩ tâm lý bị tâm thần đang điều trị tại Dưỡng Trí Viện biết rất rõ về hành vi của kẻ sát nhân nhưng chỉ im lặng. Cho đến khi con gái của thượng nghị sĩ bị bắt cóc thì cuộc đối đầu của nữ nhân viên thực tập FBI và vị bác sĩ tâm thần đã đến cực điểm. Cuối cùng tất cả cũng đều lộ diên, thủ phạm là một tên có nhân cách bệnh hoạn, một kẻ tâm thần rối loạn cựu kỳ nguy hiểm…',
        intro2:'',
        image:'https://vnwriter.net/wp-content/uploads/2017/09/sach-su-im-lang-cua-bay-cuu-185x300.jpg',
        price: 155000
    },
    {
        id: 11,
        sold: 152,
        theloai:"Tiểu thuyết",
        name:'Khi Lỗi Thuộc Về Những Vì Sao',
        intro1:'Mặc dù phép màu y học đã giúp thu hẹp khối u và ban thêm vài năm sống cho Hazel nhưng cuộc đời cô bé đang ở vào giai đoạn cuối, từng chương kế tiếp được viết theo kết quả chẩn đoán. Nhưng khi có một nhân vật điển trai tên là Augustus Waters đột nhiên xuất hiện tại Hội Tương Trợ Bệnh Nhi Ung Thư, câu chuyện của Hazel sắp được viết lại hoàn toàn.',
        intro2:'Sâu sắc, táo bạo, ngang tàng, và thô ráp, Khi lỗi thuộc về những vì sao là tác phẩm thương tâm và tham vọng nhất của John Green, tác giả của những giải thưởng, nhưng đồng thời lại khám phá một cách khéo léo nét hài hước, li kỳ, và bi thảm của việc sống và việc yêu.',
        image:'https://vnwriter.net/wp-content/uploads/2016/09/Khi-loi-thuoc-ve-nhung-vi-sao-193x300.gif',
        price: 100000
    },
    {
        id: 12,
        sold: 215,
        theloai:"Cổ tích & thần thoại",
        name:'Thần Thoại Bắc Âu',
        intro1:'Từ thời xa xưa, người dân xứ Scandinavia đã xây dựng cho mình một hệ thống tín ngưỡng, niềm tin đặc sắc và riêng biệt lý giải về nguồn gốc, khởi nguyên và quá trình phát triển của thế giới. Với những câu chuyện quen thuộc về 9 thế giới trên cây tần bì Yggdrasil, thần tới cao Odin, thần sấm sét Thor, thần khổng lồ Loki, người Elf và người lùn, Ragnarok – hoàng hôn của các vị thần… Thần Thoại Bắc Âu là một trong những thần thoại lớn nhất, nổi tiếng nhất và gây ảnh hưởng nhiều nhất hành tinh.',
        intro2:'',
        image:'https://topxephang.com/wp-content/uploads/2018/01/268420_p76712mscan0002.jpg',
        price: 250000
    },
    {
        id: 13,
        sold: 325,
        theloai:"Tiểu thuyết",
        name:'Từ Thăm Thẳm Lãng Quên',
        intro1:'Một câu chuyện bỗng nhiên hiện ra từ quá khứ mịn màng. Lúc nào người ta cũng tự hỏi, làm cách nào, bằng thứ giả thuật kim nào, mà tác giả có thể tạo ra những ký ức tinh xảo đến thế.',
        intro2:'Nhưng Jaquenline, Van Bever rồi Peter Rachman, Paris và London của giai đoạn hậu chiến trong “Từ thăm thẳm lãng quên” dần dà làm cho chúng ta hiểu rằng vỏ bọc quá khứ mịn màng hoàn toàn có thể chứa đựng những kỷ niệm đâu đớn đến thế nào, những kỷ niệm ngủ yên nhưng sẽ quay trở lại quấy nhiễu chúng ta sau từng quãng thời gian mười lăm năm.',
        image:'https://vnwriter.net/wp-content/uploads/2016/10/sach-tu-tham-tham-lang-quen-189x300.gif',
        price: 145000
    },
    {
        id: 14,
        sold: 325,
        theloai:"Cổ tích & thần thoại",
        name:'Thần Thoại Bắc Âu',
        intro1:'Những câu chuyện kinh điển cùng với những minh họa sinh động về những vị thần, những anh hùng và quái vật đã làm sống dậy bức tranh “Thần thoại Bắc Âu” đầy ấn tượng, bao gồm thần Sấm Thor, Odin, người Cha chung và cả thần Lừa gạt Loki. Với lối kể chuyện nên thơ của tác giả danh tiếng Donna Jo Napoli đã tăng thêm phần kịch tính cho những câu chuyện nhuốm màu thời gian của người Scandinavia cổ đại.',
        intro2:'Cuốn sách cũng rất phù hợp cho các độc giả nhỏ tuổi để có thể đọc và dễ dàng theo dõi với những thông tin tiện ích như bản đồ và dòng thời gian thuở ban đầu của vùng Bắc Âu.',
        image:'https://toplist.vn/images/800px/than-thoai-bac-au-545676.jpg',
        price: 220000
    },
    {
        id: 15,
        sold: 517,
        theloai:"Cổ tích & thần thoại",
        name:'Thần Thoại Hy Lạp (Tái Bản 2018)',
        intro1:'Thần thoại Hy Lạp, một di sản văn hóa của nhân dân Hy Lạp, từ lâu đã trở thành một giá trị phổ biến vô cùng quý báu của gia tài văn hóa nhân loại. Thật vậy, hiếm có thần thoại của dân tộc nào trên thế giới lại luôn luôn được tái sinh như thần thoại Hy Lạp, lại luôn luôn có mặt trong đời sống hằng ngày như thần thoại Hy Lạp.',
        intro2:'Cuốn sách trọn bộ "Thần thoại Hy Lạp" này là một kho tàng văn hóa Hy Lạp thu nhỏ mang đến cho bạn những giá trị tinh thần quý báu, rất đáng lưu giữ và trân trọng. Đó là miền đất văn hóa của tâm linh, của khát vọng, của ước mơ hoài bão chân chính, nơi sức mạnh mang ý nghĩa nhân bản sẽ chiến thắng bạo tàn, nơi cái đẹp được tôn vinh và khẳng định.',
        image:'https://www.vinabook.com/images/thumbnails/product/240x/318686_p85044mscan0001.jpg',
        price: 200000
    },
    {
        id: 16,
        sold: 251,
        theloai:"Cổ tích & thần thoại",
        name:'Các truyền thuyết của người Celt',
        intro1:'Và cuối cùng trong Top 10 thần thoại nổi tiếng nhất Thế giới là Các truyền thuyết của người Celt. Người Celt là một tập hợp các bộ tộc người Châu Âu cổ, từng sinh sống ở khắp các vùng Châu Âu. Sau sự bành trướng của Đế chế La Mã, sau đó là của các tộc người Anglo-Saxon, người Viking, người Celt ngày càng thu hẹp lại đến các vùng hẻo lánh ở Châu Âu, giờ tập trung chủ yếu ở Ireland, Wales, Scotland và Macedonia.',
        intro2:'Các truyền thuyết của người Celt đa phần tập trung vào các vị thần tự nhiên như thần rừng, các thần thú vật, cùng với đó là các câu chuyện ma quỷ. Nếu như Ireland là quê hương của câu chuyện về Jack có đầu bí ngô từ cõi người chết về mặt đất, nổi tiếng trong Halloween thì Macedonia chính là nơi mà truyền thuyết về Dracula cùng ma cà rồng bắt đầu.',
        image:'https://toplist.vn/images/800px/cac-truyen-thuyet-cua-nguoi-celt-545687.jpg',
        price: 155000
    },
    {
        id: 17,
        sold: 115,
        theloai:"Tiểu thuyết",
        name:'Ở Quán Cà Phê Của Tuổi Trẻ Lạc Lối',
        intro1:'Tuổi trẻ là một khối dồn nén. Nó có sức phá hoại đến nỗi, vào một thời điểm những tưởng đã quay lưng với cuộc đời, ta chợt nhìn lại và thấy vần vũ quanh mình những gương mặt, mối tình, những lần gặp gỡ, các cảm xúc chân thực và sống động như dao cứa. Đó là tình cảnh của Roland, nhân vật tuy xuất hiện về cuối trong “Ở quán cà phê của tuổi trẻ lạc lối” (Trần Bạch Lan dịch, Nhã Nam & NXB Văn Học) nhưng lại là mắt xích giải đáp cho mớ ngổn ngang còn lại. Một ngày bước qua quán cà phê La Condé thời xưa cũ rồi nhận ra quán đã đổi thành một cửa hiệu khác, Roland tái dựng ký ức về một cô gái mà anh đã gặp, đã yêu và đánh mất.',
        intro2:'',
        image:'https://vnwriter.net/wp-content/uploads/2018/06/sach-o-quan-ca-phe-cua-tuoi-tre-lac-loi-188x300.jpg',
        price: 150000
    },
    {
        id: 18,
        sold: 51,
        theloai:"Tiểu thuyết",
        name:'Ông Già Và Biển Cả',
        intro1:'Ông già và Biển cả (tên tiếng Anh: The Old Man and the Sea) là một tiểu thuyết ngắn được Ernest Hemingway viết ở Cuba năm 1951 và xuất bản năm 1952. Nó là truyện ngắn dạng viễn tưởng cuối cùng được viết bởi Hemingway. Đây cũng là tác phẩm nổi tiếng và là một trong những đỉnh cao trong sự nghiệp sáng tác của nhà văn. Tác phẩm này đoạt giải Pulitzer cho tác phẩm hư cấu năm 1953. Nó cũng góp phần quan trọng để nhà văn được nhận Giải Nobel văn học năm 1954.',
        intro2:'Trong tác phẩm này, ông đã triệt để dùng nguyên lý mà ông gọi là “tảng băng trôi”, chỉ mô tả một phần nổi còn lại bảy phần chìm, khi mô tả sức mạnh của con cá, sự chênh lệch về lực lượng, về cuộc chiến đấu không cân sức giữa con cá hung dữ với ông già. Tác phẩm ca ngợi niềm tin, sức lao động và khát vọng của con người.',
        image:'https://vnwriter.net/wp-content/uploads/2016/09/sach-ong-gia-va-bien-ca-185x300.jpg',
        price: 135000
    },
    {
        id: 19,
        sold: 325,
        theloai:"Cổ tích & thần thoại",
        name:'Truyền Thuyết Thành Troy Và Hy Lạp',
        intro1:'Trong tác phẩm này, tác giả Andrew Lang đã vận dụng những kiến thức thông thái của mình về lịch sử và văn học để viết lại câu chuyện về trận chiến huyền thoại giữa người Hy Lạp và thành Troy trong sử thi của Homer. Thêm vào đó, cuốn sách cũng đề cập đến những cuộc phiêu lưu của các anh hùng Theseus và Perseus, đồng thời kể về hành trình của Jason đi tìm bộ lông cừu vàng. Cuốn sách này chắc chắn sẽ làm thỏa mãn những bạn đọc yêu thích tìm hiểu những truyền thuyết kỳ thú và các tập tục văn hóa của người Hy Lạp khi xưa.',
        intro2:'',
        image:'https://readvii.com/wp-content/uploads/2020/04/sach-truyen-thuyet-thanh-troy-va-hy-lap-210x300.png',
        price: 100000
    },
    {
        id: 20,
        sold: 155,
        theloai:"Cổ tích & thần thoại",
        name:'Truyền Thuyết Thành Troy Và Hy Lạp',
        intro1:'Trong tác phẩm này, tác giả Andrew Lang đã vận dụng những kiến thức thông thái của mình về lịch sử và văn học để viết lại câu chuyện về trận chiến huyền thoại giữa người Hy Lạp và thành Troy trong sử thi của Homer. Thêm vào đó, cuốn sách cũng đề cập đến những cuộc phiêu lưu của các anh hùng Theseus và Perseus, đồng thời kể về hành trình của Jason đi tìm bộ lông cừu vàng. Cuốn sách này chắc chắn sẽ làm thỏa mãn những bạn đọc yêu thích tìm hiểu những truyền thuyết kỳ thú và các tập tục văn hóa của người Hy Lạp khi xưa.',
        intro2:'',
        image:'https://readvii.com/wp-content/uploads/2020/04/sach-truyen-thuyet-thanh-troy-va-hy-lap-210x300.png',
        price: 100000
    },


]
export default InfoData;