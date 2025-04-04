import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Ruler } from "lucide-react";

interface SizeGuideProps {
  category?: "tops" | "bottoms" | "dresses" | "shoes";
}

const SizeGuide = ({ category = "tops" }: SizeGuideProps) => {
  const sizeCharts = {
    tops: [
      { size: "XS", bust: "32-34", waist: "24-26", length: "25" },
      { size: "S", bust: "34-36", waist: "26-28", length: "25.5" },
      { size: "M", bust: "36-38", waist: "28-30", length: "26" },
      { size: "L", bust: "38-40", waist: "30-32", length: "26.5" },
      { size: "XL", bust: "40-42", waist: "32-34", length: "27" },
    ],
    bottoms: [
      { size: "XS", waist: "24-26", hip: "34-36", inseam: "30" },
      { size: "S", waist: "26-28", hip: "36-38", inseam: "30" },
      { size: "M", waist: "28-30", hip: "38-40", inseam: "30" },
      { size: "L", waist: "30-32", hip: "40-42", inseam: "30" },
      { size: "XL", waist: "32-34", hip: "42-44", inseam: "30" },
    ],
    dresses: [
      { size: "XS", bust: "32-34", waist: "24-26", hip: "34-36" },
      { size: "S", bust: "34-36", waist: "26-28", hip: "36-38" },
      { size: "M", bust: "36-38", waist: "28-30", hip: "38-40" },
      { size: "L", bust: "38-40", waist: "30-32", hip: "40-42" },
      { size: "XL", bust: "40-42", waist: "32-34", hip: "42-44" },
    ],
    shoes: [
      { size: "US 6", eu: "36", uk: "4", cm: "22.5" },
      { size: "US 7", eu: "37", uk: "5", cm: "23.5" },
      { size: "US 8", eu: "38", uk: "6", cm: "24.5" },
      { size: "US 9", eu: "39", uk: "7", cm: "25.5" },
      { size: "US 10", eu: "40", uk: "8", cm: "26.5" },
    ],
  };

  const currentChart = sizeCharts[category];
  const headers = Object.keys(currentChart[0]).map((key) =>
    key === "size" ? "Size" : key.toUpperCase(),
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-purple-400 hover:text-purple-300 p-0 h-auto font-normal"
        >
          <Ruler className="h-4 w-4 mr-1" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle>Size Guide</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th
                      key={header}
                      className="text-left p-2 border-b border-gray-800 font-medium text-gray-300"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentChart.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, i) => (
                      <td
                        key={i}
                        className="p-2 border-b border-gray-800 text-gray-300"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-400">
            <p>
              <strong className="text-white">How to Measure:</strong>
            </p>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <strong>Bust:</strong> Measure around the fullest part of your
                chest
              </li>
              <li>
                <strong>Waist:</strong> Measure around your natural waistline
              </li>
              <li>
                <strong>Hip:</strong> Measure around the fullest part of your
                hips
              </li>
              {category === "tops" && (
                <li>
                  <strong>Length:</strong> Measure from shoulder to hem
                </li>
              )}
              {category === "bottoms" && (
                <li>
                  <strong>Inseam:</strong> Measure from crotch to ankle
                </li>
              )}
            </ul>
            <p className="mt-4">
              All measurements are in inches unless otherwise specified.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;
