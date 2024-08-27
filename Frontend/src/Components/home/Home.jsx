import "./Home.css";
function Home() {
  return (
    <div className="text-center">
      <h1>Home page</h1>
      <img src="water.png" alt="Not available" />
      <div className="problem">
         <h1>Problem Definition</h1>
         <p>The primary problem addressed by this research and development project is the lack of proper water quality monitoring systems in rural areas, leading to potential health hazards. The absence of real-time information about water quality makes it challenging to ensure access to clean and safe drinking water, which is a fundamental human right. The proposed project aims
           to develop a solution that leverages Internet of Things (IoT) technology to monitor water quality efficiently and affordably.</p>
          <h1>Key Problems</h1>
          <h4>Limited Water Quality Monitoring:</h4>
          <p>Many rural areas lack effective water quality 
            monitoring systems, making it difficult to detect and address potential issues promptly.</p>
      </div>
    </div>
  );
}
export default Home;
