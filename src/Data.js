import { ReactComponent as Diamond } from "./assets/svg/diamond.svg";
import { ReactComponent as Star } from "./assets/svg/star.svg";
import { ReactComponent as Economic } from "./assets/svg/economic.svg";
import { ReactComponent as Project } from "./assets/svg/project.svg";
import { ReactComponent as Customer } from "./assets/svg/customer.svg";
import { ReactComponent as Referance } from "./assets/svg/referance.svg";
import { ReactComponent as ActiveCustomer } from "./assets/svg/activeCustomer.svg";
import { ReactComponent as Meeting } from "./assets/svg/meeting.svg";
import { ReactComponent as Design } from "./assets/svg/design.svg";
import { ReactComponent as Delivery } from "./assets/svg/delivery.svg";
import { ReactComponent as Plan } from "./assets/svg/plan.svg";
import { ReactComponent as Coding } from "./assets/svg/coding.svg";
import { ReactComponent as KurumsalYazilim } from "./assets/svg/kurumsal_yazilim.svg";
import { ReactComponent as WebPage } from "./assets/svg/web_page.svg";
import { ReactComponent as Seo } from "./assets/svg/seo.svg";
import { ReactComponent as ECommerce } from "./assets/svg/e-commerce.svg";
import { ReactComponent as MobileApp } from "./assets/svg/mobile_app.svg";
import { ReactComponent as Database } from "./assets/svg/database.svg";
import { ReactComponent as Location } from "./assets/svg/location.svg";
import { ReactComponent as Telephone } from "./assets/svg/telephone.svg";
import { ReactComponent as MobileTelephone } from "./assets/svg/mobile-telephone.svg";
import { ReactComponent as eMail } from "./assets/svg/e-mail.svg";

export const faturesSectionData = [
  {
    title: "Kurumsal Yazılım Hizmetleri",
    content:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
    Icon: KurumsalYazilim,
  },
  {
    title: "Web Sitesi Tasarımı",
    content:
      "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    Icon: WebPage,
  },
  {
    title: "Seo Hizmetleri",
    content:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
    Icon: Seo,
  },
  {
    title: "E-Ticaret Çözümleri",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    Icon: ECommerce,
  },
  {
    title: "Mobil Uygulama Geliştirme",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    Icon: MobileApp,
  },
  {
    title: "Veritabanı Optimizasyonu",
    content:
      "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
    Icon: Database,
  },
];

export const workflowSectionData1 = [
  {
    title: "1- Toplantı Yapıyoruz",
    content:
      "Duis viverra dignissim odio ut maximus. Sed porta, tortor eu cursus convallis.",
    Icon: Meeting,
  },
  { title: null, content: null },
  {
    title: "3- Tasarlıyoruz",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Icon: Design,
  },
  { title: null, content: null },
  {
    title: "5- Teslim Ediyoruz",
    content:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    Icon: Delivery,
  },
];

export const workflowSectionData2 = [
  { title: null, content: null },
  {
    title: "2- Planlıyoruz",
    content:
      "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",
    Icon: Plan,
  },
  { title: null, content: null },
  {
    title: "4- Kodluyor ve Test Ediyoruz",
    content:
      "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best",
    Icon: Coding,
  },
  { title: null, content: null },
];

export const counterSectionData = [
  { Icon: Customer, spanNumber: 1623, counterName: "Mutlu Müşteri" },
  { Icon: Project, spanNumber: 1077, counterName: "Tamamlanan Proje" },
  { Icon: Referance, spanNumber: 616, counterName: "Referans" },
  { Icon: ActiveCustomer, spanNumber: 1052, counterName: "Aktif Müşteri" },
];

export const cardSectionData = [
  {
    Icon: Economic,
    listData: [
      { title: "SSD Disk ", content: "1 GB" },
      { title: "Sub Domain ", content: "3 Adet" },
      { title: "Traffic ", content: "80 GB" },
      { title: "CPU ", content: "1 Core" },
    ],
    title: "Ekonomik",
    price: 1800,
    cardModifier: "card--pink",
    buttonModifier: "button--pink",
  },
  {
    Icon: Star,
    listData: [
      { title: "SSD Disk ", content: "5 GB" },
      { title: "Sub Domain ", content: "10 Adet" },
      { title: "Traffic ", content: "200 GB" },
      { title: "CPU ", content: "2 Core" },
    ],
    title: "Profesyonel",
    price: 2700,
    cardModifier: "",
    buttonModifier: "",
  },
  {
    Icon: Diamond,
    listData: [
      { title: "SSD Disk ", content: "Sınırsız" },
      { title: "Sub Domain ", content: "Sınırsız" },
      { title: "Traffic ", content: "Sınırsız" },
      { title: "CPU ", content: "4 Core" },
    ],
    title: "Premium",
    price: 4500,
    cardModifier: "card--purple",
    buttonModifier: "button--purple",
  },
];

export const commentSectionData = [
  {
    imgUrl: "profile1",
    text: "Nulla facilisi. Pellentesque hendrerit in arcu eget tempus. Morbi ornare mauris elit, non fringilla orci tristique nec.",
    author: "Mehmet Altan",
  },
  {
    imgUrl: "profile2",
    text: "Mauris ornare sollicitudin justo, a condimentum enim semper sit amet. Phasellus commodo felis mattis nisl blandit, sed molestie purus lobortis",
    author: "Sena Altan",
  },
  {
    imgUrl: "profile3",
    text: "Etiam leo tortor, posuere eu cursus vel, pharetra accumsan nulla. Proin sagittis metus id risus bibendum, et bibendum odio ultricies.",
    author: "Amine Şifa Altan",
  },
  {
    imgUrl: "profile4",
    text: "Nulla porttitor condimentum sem sit amet ullamcorper. Donec pharetra maximus ante. Duis malesuada lorem vel odio aliquam consequat.",
    author: "Osman Vefa Altan",
  },
];

export const footerContactData = [
  { Icon: Location, info: "Selçuklu / Konya" },
  { Icon: Telephone, info: "3322568545" },
  { Icon: MobileTelephone, info: "5546002551" },
  { Icon: eMail, info: "mehmetaltann@gmail.com" },
];

export const footerLinksData = [
  { header: "Hakkımızda", list: ["Biz Kimiz", "Tarihçe", "Galeri"] },
  { header: "Şirket", list: ["Merkez", "Fabrika", "İş Başvurusu"] },
  { header: "Kaynaklar", list: ["Mevzuat", "Sipariş", "Tedarik"] },
];

export const navigationLinkNames = [
  { title: "Anasayfa", link: "" },
  { title: "Hakkımızda", link: "" },
  { title: "Ürünler", link: "" },
  { title: "Referanslar", link: "" },
  { title: "Blog", link: "" },
  { title: "İletişim", link: "contact" },
];