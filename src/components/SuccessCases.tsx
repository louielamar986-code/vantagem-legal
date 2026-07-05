import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ end, suffix = "", duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      // Cubic ease-out calculation for smooth decel
      const easeOutCubic = 1 - Math.pow(1 - progressPercentage, 3);
      const currentValue = Math.floor(easeOutCubic * end);
      setCount(currentValue);

      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef} className="tabular-nums font-bold text-4xl sm:text-5xl text-navy-main font-serif">{count}{suffix}</span>;
}

export default function SuccessCases() {
  const stats = [
    {
      id: "casos-resolvidos",
      end: 500,
      suffix: "+",
      label: "Casos Resolvidos",
    },
    {
      id: "taxa-satisfacao",
      end: 98,
      suffix: "%",
      label: "Taxa de Satisfação",
    },
    {
      id: "anos-experiencia",
      end: 15,
      suffix: "",
      label: "Anos de Experiência",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded-custom text-center border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300"
          tabIndex={0}
          aria-label={`${stat.label}: ${stat.end}${stat.suffix}`}
        >
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-navy-main font-serif">
              <CountUp end={stat.end} suffix={stat.suffix} />
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-text-sub uppercase font-sans">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
