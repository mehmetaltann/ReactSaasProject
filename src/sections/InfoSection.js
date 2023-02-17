import Button from "../components/UI/Button";
import smallImg from "../assets/images/programming-500.png";
import middleImg from "../assets/images/programming-1000.png";
import bigImg from "../assets/images/programming-2000.png";

const InfoSection = () => {
  return (
    <section className="sec-info">
      <div className="sec-info__container">
        <div className="sec-info__left">
          <h1 className="t1">
            <span>İşinizi Büyütmede</span>
            <span>Size Yardımcı Olmak İçin</span>
            <span>Akıllı Yazılımlar Geliştiriyoruz</span>
          </h1>
          <p className="t4">
            Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı
            bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli
            'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha
            dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu
            anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi,
            varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır.
          </p>
          <Button className="button--middle">Devam</Button>
        </div>
        <div className="sec-info__right">
          <img
            srcSet={`${smallImg} 500w,${middleImg} 1000w, ${bigImg} 2000w`}
            src={middleImg}
            alt="info"
            className="sec-info__image"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
