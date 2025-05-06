export default function YuzdelerPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📘 Yüzdeler</h1>
      <p>
        Yüzde bir sayının 100’e bölünmesiyle oluşur. Örneğin %25 demek 100 birimin 25’i demektir.
        İndirimlerde, sınav başarı oranlarında ve birçok alanda kullanılır.
      </p>

      <h2>🧠 Örnek:</h2>
      <ul>
        <li>100’ün %25’i = 25</li>
        <li>80’in %10’u = 8</li>
        <li>Bir ürün %20 indirimle 120 TL olduysa, indirimsiz fiyatı 150 TL’dir.</li>
      </ul>

      <h2>🎯 Hemen Teste Başla:</h2>
      <ul>
        <li><a href="#">Kolay Seviye Test (10 soru)</a></li>
        <li><a href="#">Orta Seviye Test (10 soru)</a></li>
        <li><a href="#">Zor Seviye Test (10 soru)</a></li>
      </ul>

      <p style={{ marginTop: "3rem", fontStyle: "italic" }}>
        👩‍🏫 Nilsu Öğretmen diyor ki: Bu konu çok önemli, testleri çözdükçe pekişecek!
      </p>
    </div>
  );
}