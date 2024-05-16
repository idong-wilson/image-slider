import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className='w-11/12 md:w-3/4 m-auto'>
      <div className='mt-10 md:mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className='max-w-[28.12rem] bg-white text-black rounded-xl mx-2'>
              <div className='flex justify-center items-center h-56 bg-sky-500 rounded-t-xl'>
                <img src={d.img} alt={d.name} className='h-44 w-44 rounded-full' />
              </div>
              <div className='flex flex-col items-center justify-center p-4 gap-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.description}</p>
                <button className='bg-sky-500 text-white text-lg py-2 px-4 rounded-3xl'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Jane Doe`,
    img: `/assets/ayo.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `John Doe`,
    img: `/assets/amir.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Pat Doe`,
    img: `/assets/jurica.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Jenny Doe`,
    img: `/assets/michael.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Mika Doe`,
    img: `/assets/mika.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Jacob Doe`,
    img: `/assets/nicolas.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Jan Doe`,
    img: `/assets/stefan.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Janet Doe`,
    img: `/assets/jessica.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
  {
    name: `Midas Doe`,
    img: `/assets/midas.jpg`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  },
]

export default App;

