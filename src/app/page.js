"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundImage from "../../public/background.png";

export default function Home() {
  return (
    <main>
      <section className="bg-[#BE8AE2] text-purple-50">
        <div className="relative w-full">
          <Image src={BackgroundImage} width={1079} height={601} alt="Picture of the author" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/40 to-purple-500/55"></div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-5xl text-center text-xl font-bold leading-snug text-purple-100 lg:text-4xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Pola Hidup Sehat, Jurus Jitu Mencegah Kanker
          </motion.h2>
        </div>
        <div className="mx-auto max-w-[65ch] py-8 flex flex-col gap-5 px-4">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Mencegah lebih baik daripada mengobati. Ungkapan itu agaknya perlu diresapi oleh Kawan GNFI yang memiliki awareness terhadap kanker. Dengan begitu banyak cara untuk mengobati kanker, mencegahnya tetap selalu jadi jalan terbaik.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Kunci pencegahan kanker terletak pada pola hidup. Semakin sehat pola hidup seseorang, semakin kecil kemungkinan mereka terkena penyakit ini. Hal ini disebabkan karena kanker lebih banyak dipengaruhi oleh faktor eksternal
            daripada faktor keturunan.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Menurut Pratiwi Astar, Humas Yayasan Kanker Indonesia, sekitar 90 persen kasus kanker disebabkan oleh faktor eksternal, sedangkan faktor genetik hanya berkontribusi sekitar 10 persen. Ini menunjukkan betapa pentingnya mengadopsi
            pola hidup sehat untuk menurunkan risiko terkena kanker.
          </motion.p>
          <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 4, ease: "easeOut" }} src="/quote1.png" alt="quote gambar kanker pertama" />
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            "Faktor eksternal itu disebabkan oleh pola hidup, termasuk merokok, (dan jadi) perokok pasif. Maka dari itu, yang sehat-sehat ini belum tentu (sepenuhnya) sehat, karena pola hidup yang kita lakukan sekarang ini dampaknya bisa
            terlihat jelas 20 tahun kemudian," ujar Pratiwi pada Kamis (1/2/2024) lalu.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Faktor eksternal yang paling signifikan tentu saja adalah pola hidup. Selain merokok, kebiasaan makan juga menjadi bagian penting yang perlu diperhatikan. Konsumsi makanan instan, kalengan, dan makanan olahan secara berlebihan
            diketahui sebagai pemicu kanker. Meskipun jenis makanan ini sangat umum dikonsumsi, bahkan oleh orang-orang muda, hal ini dapat berdampak buruk bagi kesehatan dalam jangka panjang.
          </motion.p>
          <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 4, ease: "easeOut" }} src="/quote2.png" alt="quote gambar kanker kedua" />
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Pratiwi juga mengungkapkan bahwa saat ini banyak penderita kanker yang berusia di bawah 50 tahun. Kondisi ini semakin memperkuat seruan untuk menerapkan pola hidup sehat sejak dini. Langkah-langkah seperti menjaga pola makan
            yang seimbang, rutin berolahraga, menghindari rokok dan alkohol, serta melakukan pemeriksaan kesehatan secara berkala sangat disarankan.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            "Pola hidup tidak sehat orang yang masih muda, misalnya 15 tahun, 15 tahun kemudian saat unur 30 sudah bisa kena (kanker)," katanya.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            Mengadopsi pola hidup sehat tidak hanya bermanfaat untuk mencegah kanker, tetapi juga meningkatkan kualitas hidup secara keseluruhan. Maka dari itu, penting bagi kita semua untuk mulai memperhatikan dan menerapkan gaya hidup
            sehat demi masa depan yang lebih baik dan bebas dari kanker.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
