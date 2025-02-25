import React, { useState, useRef, useEffect } from 'react';
import { Upload, ChevronLeft, ChevronRight, Sparkles, X, RefreshCw } from 'lucide-react';

const images = [
  { url: '/Images/Abhay Deol.jpg', name: 'Abhay Deol' },
  { url: '/Images/Adil Hussain.jpg', name: 'Adil Hussain' },
  { url: '/Images/Ajay Devgan.jpg', name: 'Ajay Devgan' },
  { url: '/Images/Akshay Khanna.jpg', name: 'Akshay Khanna' },
  { url: '/Images/Akshay Kumar.jpg', name: 'Akshay Kumar' },
  { url: '/Images/Amitabh Bacchan.jpg', name: 'Amitabh Bacchan' },
  { url: '/Images/Amjad Khan.jpg', name: 'Amjad Khan' },
  { url: '/Images/Amol Palekar.jpg', name: 'Amol Palekar' },
  { url: '/Images/Amole Gupte.jpg', name: 'Amole Gupte' },
  { url: '/Images/Amrish Puri.jpg', name: 'Amrish Puri' },
  { url: '/Images/Anil Kapoor.jpg', name: 'Anil Kapoor' },
  { url: '/Images/Annu Kapoor.jpg', name: 'Annu Kapoor' },
  { url: '/Images/Anupam Kher.jpg', name: 'Anupam Kher' },
  { url: '/Images/Anushka Shetty.jpg', name: 'Anushka Shetty' },
  { url: '/Images/Arshad Warsi.jpg', name: 'Arshad Warsi' },
  { url: '/Images/Aruna Irani.jpg', name: 'Aruna Irani' },
  { url: '/Images/Ashish Vidyarthi.jpg', name: 'Ashish Vidyarthi' },
  { url: '/Images/Asrani.jpg', name: 'Asrani' },
  { url: '/Images/Atul Kulkarni.jpg', name: 'Atul Kulkarni' },
  { url: '/Images/Ayushmann Khurrana.jpg', name: 'Ayushmann Khurrana' },
  { url: '/Images/Boman Irani.jpg', name: 'Boman Irani' },
  { url: '/Images/Chiranjeevi.jpg', name: 'Chiranjeevi' },
  { url: '/Images/Chunky Panday.jpg', name: 'Chunky Panday' },
  { url: '/Images/Danny Dezongpa.jpg', name: 'Danny Dezongpa' },
  { url: '/Images/Darsheel Safary.jpg', name: 'Darsheel Safary' },
  { url: '/Images/Deepika Padukone.jpg', name: 'Deepika Padukone' },
  { url: '/Images/Deepti Naval.jpg', name: 'Deepti Naval' },
  { url: '/Images/Dev Anand.jpg', name: 'Dev Anand' },
  { url: '/Images/Dharmendra.jpg', name: 'Dharmendra' },
  { url: '/Images/Dilip Kumar.jpg', name: 'Dilip Kumar' },
  { url: '/Images/Dimple Kapadia.jpg', name: 'Dimple Kapadia' },
  { url: '/Images/Farhan Aktar.jpg', name: 'Farhan Aktar' },
  { url: '/Images/Farida Jalal.jpg', name: 'Farida Jalal' },
  { url: '/Images/Farooq Shaikh.jpg', name: 'Farooq Shaikh' },
  { url: '/Images/Girish Karnad.jpg', name: 'Girish Karnad' },
  { url: '/Images/Govinda.jpg', name: 'Govinda' },
  { url: '/Images/Gulshan Grover.jpg', name: 'Gulshan Grover' },
  { url: '/Images/Hrithik Roshan.jpg', name: 'Hrithik Roshan' },
  { url: '/Images/Huma Qureshi.jpg', name: 'Huma Qureshi' },
  { url: '/Images/Irrfan Khan.jpg', name: 'Irrfan Khan' },
  { url: '/Images/Jaspal Bhatti.jpg', name: 'Jaspal Bhatti' },
  { url: '/Images/Jeetendra.jpg', name: 'Jeetendra' },
  { url: '/Images/Jimmy Sheirgill.jpg', name: 'Jimmy Sheirgill' },
  { url: '/Images/Johnny Lever.jpg', name: 'Johnny Lever' },
  { url: '/Images/Kader Khan.jpg', name: 'Kader Khan' },
  { url: '/Images/Kajol.jpg', name: 'Kajol' },
  { url: '/Images/Kalki Koechlin.jpg', name: 'Kalki Koechlin' },
  { url: '/Images/Kamal Hassan.jpg', name: 'Kamal Hassan' },
  { url: '/Images/Kangana Ranaut.jpg', name: 'Kangana Ranaut' },
  { url: '/Images/Kay Kay Menon.jpg', name: 'Kay Kay Menon' },
  { url: '/Images/Konkona Sen Sharma.jpg', name: 'Konkona Sen Sharma' },
  { url: '/Images/Kulbhushan Kharbanda.jpg', name: 'Kulbhushan Kharbanda' },
  { url: '/Images/Lara Dutta.jpg', name: 'Lara Dutta' },
  { url: '/Images/Madhavan.jpg', name: 'Madhavan' },
  { url: '/Images/Madhuri Dixit.jpg', name: 'Madhuri Dixit' },
  { url: '/Images/Mammootty.jpg', name: 'Mammootty' },
  { url: '/Images/Manoj Bajpayee.jpg', name: 'Manoj Bajpayee' },
  { url: '/Images/Manoj Pahwa.jpg', name: 'Manoj Pahwa' },
  { url: '/Images/Mehmood.jpg', name: 'Mehmood' },
  { url: '/Images/Mita Vashisht.jpg', name: 'Mita Vashisht' },
  { url: '/Images/Mithun Chakraborty.jpg', name: 'Mithun Chakraborty' },
  { url: '/Images/Mohanlal.jpg', name: 'Mohanlal' },
  { url: '/Images/Mohnish Bahl.jpg', name: 'Mohnish Bahl' },
  { url: '/Images/Mukesh Khanna.jpg', name: 'Mukesh Khanna' },
  { url: '/Images/Mukul Dev.jpg', name: 'Mukul Dev' },
  { url: '/Images/Nagarjuna Akkineni.jpg', name: 'Nagarjuna Akkineni' },
  { url: '/Images/Nana Patekar.jpg', name: 'Nana Patekar' },
  { url: '/Images/Nandita Das.jpg', name: 'Nandita Das' },
  { url: '/Images/Nargis.jpg', name: 'Nargis' },
  { url: '/Images/Naseeruddin Shah.jpg', name: 'Naseeruddin Shah' },
  { url: '/Images/Navin  Nischol.jpg', name: 'Navin  Nischol' },
  { url: '/Images/Nawazuddin Siddiqui.jpg', name: 'Nawazuddin Siddiqui' },
  { url: '/Images/Neeraj Kabi.jpg', name: 'Neeraj Kabi' },
  { url: '/Images/Nirupa Roy.jpg', name: 'Nirupa Roy' },
  { url: '/Images/Om Puri.jpg', name: 'Om Puri' },
  { url: '/Images/Pankaj Kapur.jpg', name: 'Pankaj Kapur' },
  { url: '/Images/Pankaj Tripathi.jpg', name: 'Pankaj Tripathi' },
  { url: '/Images/Paresh Rawal.jpg', name: 'Paresh Rawal' },
  { url: '/Images/Pawan Malhotra.jpg', name: 'Pawan Malhotra' },
  { url: '/Images/Pooja Bhatt.jpg', name: 'Pooja Bhatt' },
  { url: '/Images/Prabhas.jpg', name: 'Prabhas' },
  { url: '/Images/Prabhu Deva.jpg', name: 'Prabhu Deva' },
  { url: '/Images/Prakash Raj.jpg', name: 'Prakash Raj' },
  { url: '/Images/Pran.jpg', name: 'Pran' },
  { url: '/Images/Prem Chopra.jpg', name: 'Prem Chopra' },
  { url: '/Images/Priyanka Chopra.jpg', name: 'Priyanka Chopra' },
  { url: '/Images/Raaj Kumar.jpg', name: 'Raaj Kumar' },
  { url: '/Images/Radhika Apte.jpg', name: 'Radhika Apte' },
  { url: '/Images/Rahul Bose.jpg', name: 'Rahul Bose' },
  { url: '/Images/Raj Babbar.jpg', name: 'Raj Babbar' },
  { url: '/Images/Raj Kapoor.jpg', name: 'Raj Kapoor' },
  { url: '/Images/Rajat Kapoor.jpg', name: 'Rajat Kapoor' },
  { url: '/Images/Rajesh Khanna.jpg', name: 'Rajesh Khanna' },
  { url: '/Images/Rajit Kapoor.jpg', name: 'Rajit Kapoor' },
  { url: '/Images/Rajkummar Rao.jpg', name: 'Rajkummar Rao' },
  { url: '/Images/Rajnikanth.jpg', name: 'Rajnikanth' },
  { url: '/Images/Rajpal Yadav.jpg', name: 'Rajpal Yadav' },
  { url: '/Images/Rakhee Gulzar.jpg', name: 'Rakhee Gulzar' },
  { url: '/Images/Ramya Krishnan.jpg', name: 'Ramya Krishnan' },
  { url: '/Images/Ranbir Kapoor.jpg', name: 'Ranbir Kapoor' },
  { url: '/Images/Randeep Hooda.jpg', name: 'Randeep Hooda' },
  { url: '/Images/Rani Mukherji.jpg', name: 'Rani Mukherji' },
  { url: '/Images/Ranveer Singh.jpg', name: 'Ranveer Singh' },
  { url: '/Images/Ranvir Shorey.jpg', name: 'Ranvir Shorey' },
  { url: '/Images/Ratna Pathak Shah.jpg', name: 'Ratna Pathak Shah' },
  { url: '/Images/Rekha.jpg', name: 'Rekha' },
  { url: '/Images/Richa Chadha.jpg', name: 'Richa Chadha' },
  { url: '/Images/Rishi Kapoor.jpg', name: 'Rishi Kapoor' },
  { url: '/Images/Riteish Deshmukh.jpg', name: 'Riteish Deshmukh' },
  { url: '/Images/Sachin Khedekar.jpg', name: 'Sachin Khedekar' },
  { url: '/Images/Saeed Jaffrey.jpg', name: 'Saeed Jaffrey' },
  { url: '/Images/Saif Ali Khan.jpg', name: 'Saif Ali Khan' },
  { url: '/Images/Salmaan Khan.jpg', name: 'Salmaan Khan' },
  { url: '/Images/Sanjay Dutt.jpg', name: 'Sanjay Dutt' },
  { url: '/Images/Sanjay Mishra.jpg', name: 'Sanjay Mishra' },
  { url: '/Images/Shabana Azmi.jpg', name: 'Shabana Azmi' },
  { url: '/Images/Shah Rukh Khan.jpg', name: 'Shah Rukh Khan' },
  { url: '/Images/Sharman Joshi.jpg', name: 'Sharman Joshi' },
  { url: '/Images/Sharmila Tagore.jpg', name: 'Sharmila Tagore' },
  { url: '/Images/Shashi Kapoor.jpg', name: 'Shashi Kapoor' },
  { url: '/Images/Shreyas Talpade.jpg', name: 'Shreyas Talpade' },
  { url: '/Images/Smita Patil.jpg', name: 'Smita Patil' },
  { url: '/Images/Soumitra Chatterjee.jpg', name: 'Soumitra Chatterjee' },
  { url: '/Images/Sridevi.jpg', name: 'Sridevi' },
  { url: '/Images/Sunil Shetty.jpg', name: 'Sunil Shetty' },
  { url: '/Images/Sunny Deol.jpg', name: 'Sunny Deol' },
  { url: '/Images/Tabu.jpg', name: 'Tabu' },
  { url: '/Images/Tinnu Anand.jpg', name: 'Tinnu Anand' },
  { url: '/Images/Utpal Dutt.jpg', name: 'Utpal Dutt' },
  { url: '/Images/Varun Dhavan.jpg', name: 'Varun Dhavan' },
  { url: '/Images/Vidya Balan.jpg', name: 'Vidya Balan' },
  { url: '/Images/Vinod Khanna.jpg', name: 'Vinod Khanna' },
  { url: '/Images/Waheeda Rehman.jpg', name: 'Waheeda Rehman' },
  { url: '/Images/Zarina Wahab.jpg', name: 'Zarina Wahab' },
  { url: '/Images/Zeenat Aman.jpg', name: 'Zeenat Aman' },
];

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClassifying, setIsClassifying] = useState(false);
  const [classificationResult, setClassificationResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        const pureBase64 = base64String.split(',')[1]; // Extract only the Base64 part
        console.log("Base64 Encoded String:", pureBase64); // Logs the cleaned Base64 string
        setSelectedImage(pureBase64);
        setClassificationResult(null);
        setIsClassifying(false);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setClassificationResult(null);
        setIsClassifying(false);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const clearSelectedImage = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedImage(null);
    setClassificationResult(null);
    setIsClassifying(false);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClassify = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setError(null);
    try {
      //const requestData= JSON.stringify({Image_data: selectedImage});
      const formData = new URLSearchParams();
      formData.append('image_data', selectedImage);

      const response = await fetch('http://127.0.0.1:5000/classify_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          //'Content-Type': 'application/json',
        },
        body: formData,
        //body: requestData,
      });

      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
        setIsClassifying(true);
      } else if (data && data[0] && data[0].predicted_class) {
        const formattedName = data[0].predicted_class
          .split('_')
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        setClassificationResult(formattedName);
        setIsClassifying(true);
      }
    } catch (error) {
      console.error('Classification error:', error);
      setError('An error occurred during classification');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setClassificationResult(null);
    setIsClassifying(false);
    setError(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleSlides = () => {
    if (window.innerWidth >= 1920) return 5;
    if (window.innerWidth >= 1536) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const displayImages = [...images, ...images.slice(0, getVisibleSlides())];

  return (
    <div className={`min-h-screen bg-black bg-mesh text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 animate-pulse"></div>
        <div className={`relative ${isLoaded ? 'animate-fadeInUp' : ''}`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-glow animate-glowPulse">
              INDIAN ACTORS
            </h1>
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 text-glow">
            CLASSIFIER
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto rounded-full shadow-lg"></div>
        </div>
      </header>

      {/* Carousel */}
      <div className={`relative max-w-[2000px] mx-auto px-4 mb-16 ${isLoaded ? 'animate-scaleIn' : ''}`}>
        <div className="overflow-hidden rounded-2xl shadow-2xl">
          <div className="flex transition-transform duration-500 ease-out backdrop-blur-lg bg-white/5"
               style={{ transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)` }}>
            {displayImages.map((image, index) => (
              <div key={index} 
                   className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 flex-shrink-0 p-4 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className="relative group">
                    <img src={image.url} alt={image.name} className="w-full h-64 object-cover object-top transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <p className="p-4 text-center font-semibold text-glow">{image.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-110">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all transform hover:scale-110">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Upload Section */}
      <div className={`max-w-2xl mx-auto px-4 mb-16 ${isLoaded ? 'animate-slideInLeft' : ''}`}>
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer backdrop-blur-sm relative
            ${isDragging ? 'border-purple-400 bg-purple-900/30' : 'border-gray-400 hover:border-purple-400 hover:bg-purple-900/20'}`}
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {selectedImage ? (
            <div className="relative">
              <img src={selectedImage} alt="Selected" className="max-h-64 mx-auto rounded-lg shadow-2xl" />
              <button
                onClick={clearSelectedImage}
                className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-600 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <Upload className="w-16 h-16 mx-auto mb-4 text-purple-400 animate-bounce" />
              <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                DROP FILES OR CLICK TO UPLOAD
              </p>
            </>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Classification Result or Classify Button */}
      <div className={`text-center pb-16 ${isLoaded ? 'animate-slideInRight' : ''}`}>
        {isClassifying ? (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Classification Result
              </h3>
              {error ? (
                <p className="text-xl text-red-400 mb-6">
                  {error}
                </p>
              ) : (
                <p className="text-xl text-white mb-6">
                  The Uploaded Actor/Actress is similar to:
                  <span className="block mt-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    {classificationResult}
                  </span>
                </p>
              )}
            </div>
            <button 
              onClick={handleReset}
              className="px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full text-xl font-semibold
                       hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transform hover:scale-105 transition-all
                       shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] active:scale-95
                       inline-flex items-center gap-2"
            >
              <RefreshCw className="w-6 h-6" />
              Reclassify
            </button>
          </div>
        ) : (
          <button 
            onClick={handleClassify}
            disabled={!selectedImage || isLoading}
            className={`px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full text-xl font-semibold
                     hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 transform hover:scale-105 transition-all
                     shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)] active:scale-95
                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                     inline-flex items-center gap-2`}
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-6 h-6 animate-spin" />
                Classifying...
              </>
            ) : (
              'Classify'
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;