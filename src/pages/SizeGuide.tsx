import React, { useState } from 'react';
import { Ruler, Shirt, UserSquare2 } from 'lucide-react';

const SizeGuide = () => {
  const [activeCategory, setActiveCategory] = useState<'tops' | 'bottoms' | 'dresses' | 'measurements'>('tops');

  return (
    <div className="bg-gothic-950 text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-cinzel text-4xl mb-2">Size Guide</h1>
        <p className="text-gothic-300 mb-8">Find your perfect fit with our detailed size charts and measurement guide</p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b border-gothic-800 mb-8">
          <button
            onClick={() => setActiveCategory('tops')}
            className={`py-3 px-6 font-cinzel border-b-2 ${
              activeCategory === 'tops'
                ? 'border-white text-white'
                : 'border-transparent text-gothic-300 hover:text-white'
            }`}
          >
            Tops & Shirts
          </button>
          <button
            onClick={() => setActiveCategory('bottoms')}
            className={`py-3 px-6 font-cinzel border-b-2 ${
              activeCategory === 'bottoms'
                ? 'border-white text-white'
                : 'border-transparent text-gothic-300 hover:text-white'
            }`}
          >
            Bottoms
          </button>
          <button
            onClick={() => setActiveCategory('dresses')}
            className={`py-3 px-6 font-cinzel border-b-2 ${
              activeCategory === 'dresses'
                ? 'border-white text-white'
                : 'border-transparent text-gothic-300 hover:text-white'
            }`}
          >
            Dresses & Outerwear
          </button>
          <button
            onClick={() => setActiveCategory('measurements')}
            className={`py-3 px-6 font-cinzel border-b-2 ${
              activeCategory === 'measurements'
                ? 'border-white text-white'
                : 'border-transparent text-gothic-300 hover:text-white'
            }`}
          >
            How to Measure
          </button>
        </div>

        {/* Tops Size Chart */}
        {activeCategory === 'tops' && (
          <div>
            <div className="flex items-center mb-6">
              <Shirt className="h-6 w-6 mr-2 text-gothic-500" />
              <h2 className="font-cinzel text-2xl">Tops & Shirts Size Chart</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gothic-300 mb-4">
                  Our tops and shirts are designed to fit comfortably with a modern silhouette. For a more relaxed fit, we recommend sizing up.
                </p>
                <div className="bg-gothic-900 rounded-lg overflow-hidden">
                  <table className="w-full text-gothic-300">
                    <thead className="bg-gothic-800">
                      <tr>
                        <th className="py-3 px-4 text-left">Size</th>
                        <th className="py-3 px-4 text-left">Chest (in)</th>
                        <th className="py-3 px-4 text-left">Waist (in)</th>
                        <th className="py-3 px-4 text-left">Hip (in)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gothic-800">
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XS</td>
                        <td className="py-3 px-4">32-34</td>
                        <td className="py-3 px-4">26-28</td>
                        <td className="py-3 px-4">34-36</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">S</td>
                        <td className="py-3 px-4">35-37</td>
                        <td className="py-3 px-4">29-31</td>
                        <td className="py-3 px-4">37-39</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">M</td>
                        <td className="py-3 px-4">38-40</td>
                        <td className="py-3 px-4">32-34</td>
                        <td className="py-3 px-4">40-42</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">L</td>
                        <td className="py-3 px-4">41-43</td>
                        <td className="py-3 px-4">35-37</td>
                        <td className="py-3 px-4">43-45</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XL</td>
                        <td className="py-3 px-4">44-46</td>
                        <td className="py-3 px-4">38-40</td>
                        <td className="py-3 px-4">46-48</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XXL</td>
                        <td className="py-3 px-4">47-49</td>
                        <td className="py-3 px-4">41-43</td>
                        <td className="py-3 px-4">49-51</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1564859228273-274232fdb516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person in a stylish top" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-gothic-900 p-6 rounded-lg mb-8">
              <h3 className="font-cinzel text-xl mb-4">Sleeve Length</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Short Sleeve</h4>
                  <p className="text-gothic-300 text-sm">Typically measures 7-9 inches from shoulder seam to sleeve end.</p>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">3/4 Sleeve</h4>
                  <p className="text-gothic-300 text-sm">Typically measures 18-20 inches from shoulder seam to sleeve end.</p>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Long Sleeve</h4>
                  <p className="text-gothic-300 text-sm">Typically measures 23-25 inches from shoulder seam to sleeve end.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottoms Size Chart */}
        {activeCategory === 'bottoms' && (
          <div>
            <div className="flex items-center mb-6">
              <Shirt className="h-6 w-6 mr-2 text-gothic-500" />
              <h2 className="font-cinzel text-2xl">Bottoms Size Chart</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gothic-300 mb-4">
                  Our bottoms are designed with comfort and style in mind. Refer to the chart below to find your perfect size based on waist and hip measurements.
                </p>
                <div className="bg-gothic-900 rounded-lg overflow-hidden">
                  <table className="w-full text-gothic-300">
                    <thead className="bg-gothic-800">
                      <tr>
                        <th className="py-3 px-4 text-left">Size</th>
                        <th className="py-3 px-4 text-left">Waist (in)</th>
                        <th className="py-3 px-4 text-left">Hip (in)</th>
                        <th className="py-3 px-4 text-left">Inseam (in)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gothic-800">
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XS (0-2)</td>
                        <td className="py-3 px-4">24-26</td>
                        <td className="py-3 px-4">34-36</td>
                        <td className="py-3 px-4">30</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">S (4-6)</td>
                        <td className="py-3 px-4">27-29</td>
                        <td className="py-3 px-4">37-39</td>
                        <td className="py-3 px-4">30</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">M (8-10)</td>
                        <td className="py-3 px-4">30-32</td>
                        <td className="py-3 px-4">40-42</td>
                        <td className="py-3 px-4">30</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">L (12-14)</td>
                        <td className="py-3 px-4">33-35</td>
                        <td className="py-3 px-4">43-45</td>
                        <td className="py-3 px-4">30</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XL (16-18)</td>
                        <td className="py-3 px-4">36-38</td>
                        <td className="py-3 px-4">46-48</td>
                        <td className="py-3 px-4">30</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XXL (20-22)</td>
                        <td className="py-3 px-4">39-41</td>
                        <td className="py-3 px-4">49-51</td>
                        <td className="py-3 px-4">30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person in stylish pants" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-gothic-900 p-6 rounded-lg mb-8">
              <h3 className="font-cinzel text-xl mb-4">Leg Styles</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Skinny</h4>
                  <p className="text-gothic-300 text-sm">Fitted through hip and thigh with a narrow leg opening.</p>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Straight</h4>
                  <p className="text-gothic-300 text-sm">Straight from hip to ankle with a moderate leg opening.</p>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Relaxed</h4>
                  <p className="text-gothic-300 text-sm">Looser fit through the hip and thigh with a wider leg opening.</p>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Wide Leg</h4>
                  <p className="text-gothic-300 text-sm">Fitted at waist with a dramatic wide leg from hip to ankle.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dresses & Outerwear Size Chart */}
        {activeCategory === 'dresses' && (
          <div>
            <div className="flex items-center mb-6">
              <UserSquare2 className="h-6 w-6 mr-2 text-gothic-500" />
              <h2 className="font-cinzel text-2xl">Dresses & Outerwear Size Chart</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gothic-300 mb-4">
                  Find your perfect fit for dresses and outerwear. For dresses, consider both your bust and waist measurements. For outerwear, you may want to size up if you plan to layer underneath.
                </p>
                <div className="bg-gothic-900 rounded-lg overflow-hidden">
                  <table className="w-full text-gothic-300">
                    <thead className="bg-gothic-800">
                      <tr>
                        <th className="py-3 px-4 text-left">Size</th>
                        <th className="py-3 px-4 text-left">Bust (in)</th>
                        <th className="py-3 px-4 text-left">Waist (in)</th>
                        <th className="py-3 px-4 text-left">Hip (in)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gothic-800">
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XS (0-2)</td>
                        <td className="py-3 px-4">32-33</td>
                        <td className="py-3 px-4">24-26</td>
                        <td className="py-3 px-4">34-36</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">S (4-6)</td>
                        <td className="py-3 px-4">34-35</td>
                        <td className="py-3 px-4">27-29</td>
                        <td className="py-3 px-4">37-39</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">M (8-10)</td>
                        <td className="py-3 px-4">36-38</td>
                        <td className="py-3 px-4">30-32</td>
                        <td className="py-3 px-4">40-42</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">L (12-14)</td>
                        <td className="py-3 px-4">39-41</td>
                        <td className="py-3 px-4">33-35</td>
                        <td className="py-3 px-4">43-45</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XL (16-18)</td>
                        <td className="py-3 px-4">42-44</td>
                        <td className="py-3 px-4">36-38</td>
                        <td className="py-3 px-4">46-48</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-cinzel">XXL (20-22)</td>
                        <td className="py-3 px-4">45-47</td>
                        <td className="py-3 px-4">39-41</td>
                        <td className="py-3 px-4">49-51</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person in a stylish dress" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            
            <div className="bg-gothic-900 p-6 rounded-lg mb-8">
              <h3 className="font-cinzel text-xl mb-4">Dress & Jacket Lengths</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Dress Lengths</h4>
                  <ul className="text-gothic-300 text-sm space-y-2">
                    <li>• Mini: 30-35 inches from shoulder to hem</li>
                    <li>• Midi: 41-45 inches from shoulder to hem</li>
                    <li>• Maxi: 55-62 inches from shoulder to hem</li>
                  </ul>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Jacket Lengths</h4>
                  <ul className="text-gothic-300 text-sm space-y-2">
                    <li>• Cropped: 17-21 inches</li>
                    <li>• Regular: 23-27 inches</li>
                    <li>• Long: 28-35 inches</li>
                  </ul>
                </div>
                <div className="bg-gothic-800 p-4 rounded-lg">
                  <h4 className="font-cinzel mb-2">Coat Lengths</h4>
                  <ul className="text-gothic-300 text-sm space-y-2">
                    <li>• Hip Length: 26-29 inches</li>
                    <li>• Mid-thigh: 30-33 inches</li>
                    <li>• Knee Length: 36-40 inches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* How to Measure */}
        {activeCategory === 'measurements' && (
          <div>
            <div className="flex items-center mb-6">
              <Ruler className="h-6 w-6 mr-2 text-gothic-500" />
              <h2 className="font-cinzel text-2xl">How to Measure Yourself</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gothic-900 p-6 rounded-lg">
                <h3 className="font-cinzel text-xl mb-4">What You'll Need</h3>
                <p className="text-gothic-300 mb-4">To ensure accurate measurements, you'll need:</p>
                <ul className="text-gothic-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>A soft measuring tape (fabric tape measure)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>Wearing minimal, form-fitting clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>A friend to help (for the most accurate results)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>A mirror to ensure the tape is positioned correctly</span>
                  </li>
                </ul>
                
                <h3 className="font-cinzel text-xl mt-6 mb-4">Tips for Accurate Measurements</h3>
                <ul className="text-gothic-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>Stand naturally with arms relaxed at sides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>Keep the measuring tape level and not too tight or loose</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>Measure twice to ensure accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gothic-500 mr-2">•</span>
                    <span>If between sizes, we recommend sizing up for comfort</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person taking measurements" 
                  className="w-full h-auto rounded-lg mb-4"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gothic-900 p-6 rounded-lg">
                <h3 className="font-cinzel text-xl mb-4">Bust / Chest</h3>
                <img 
                  src="https://images.unsplash.com/photo-1581163898753-a1bfbd90d0e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Bust measurement" 
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-gothic-300 text-sm">
                  Measure around the fullest part of your bust/chest, keeping the tape parallel to the floor.
                </p>
              </div>
              
              <div className="bg-gothic-900 p-6 rounded-lg">
                <h3 className="font-cinzel text-xl mb-4">Waist</h3>
                <img 
                  src="https://images.unsplash.com/photo-1511965682125-8359f0d4c3a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Waist measurement" 
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-gothic-300 text-sm">
                  Measure around your natural waistline, which is the narrowest part of your waist, usually just above the navel.
                </p>
              </div>
              
              <div className="bg-gothic-900 p-6 rounded-lg">
                <h3 className="font-cinzel text-xl mb-4">Hips</h3>
                <img 
                  src="https://images.unsplash.com/photo-1591347887817-173e3d5ec89c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hip measurement" 
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-gothic-300 text-sm">
                  Measure around the fullest part of your hips, usually about 7-8 inches below your natural waistline.
                </p>
              </div>
              
              <div className="bg-gothic-900 p-6 rounded-lg">
                <h3 className="font-cinzel text-xl mb-4">Inseam</h3>
                <img 
                  src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Inseam measurement" 
                  className="w-full aspect-square object-cover rounded-lg mb-4"
                />
                <p className="text-gothic-300 text-sm">
                  Measure from the crotch seam to the bottom of the ankle, along the inside of the leg.
                </p>
              </div>
            </div>
            
            <div className="bg-gothic-900 p-6 rounded-lg">
              <h3 className="font-cinzel text-xl mb-4">International Size Conversion</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-gothic-300">
                  <thead className="bg-gothic-800">
                    <tr>
                      <th className="py-3 px-4 text-left">US</th>
                      <th className="py-3 px-4 text-left">UK</th>
                      <th className="py-3 px-4 text-left">EU</th>
                      <th className="py-3 px-4 text-left">IT</th>
                      <th className="py-3 px-4 text-left">FR</th>
                      <th className="py-3 px-4 text-left">AU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gothic-800">
                    <tr>
                      <td className="py-3 px-4">XS (0-2)</td>
                      <td className="py-3 px-4">4-6</td>
                      <td className="py-3 px-4">32-34</td>
                      <td className="py-3 px-4">36-38</td>
                      <td className="py-3 px-4">34-36</td>
                      <td className="py-3 px-4">4-6</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">S (4-6)</td>
                      <td className="py-3 px-4">8-10</td>
                      <td className="py-3 px-4">36-38</td>
                      <td className="py-3 px-4">40-42</td>
                      <td className="py-3 px-4">38-40</td>
                      <td className="py-3 px-4">8-10</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">M (8-10)</td>
                      <td className="py-3 px-4">12-14</td>
                      <td className="py-3 px-4">40-42</td>
                      <td className="py-3 px-4">44-46</td>
                      <td className="py-3 px-4">42-44</td>
                      <td className="py-3 px-4">12-14</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">L (12-14)</td>
                      <td className="py-3 px-4">16-18</td>
                      <td className="py-3 px-4">44-46</td>
                      <td className="py-3 px-4">48-50</td>
                      <td className="py-3 px-4">46-48</td>
                      <td className="py-3 px-4">16-18</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">XL (16-18)</td>
                      <td className="py-3 px-4">20-22</td>
                      <td className="py-3 px-4">48-50</td>
                      <td className="py-3 px-4">52-54</td>
                      <td className="py-3 px-4">50-52</td>
                      <td className="py-3 px-4">20-22</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Help Section */}
        <div className="mt-12 bg-gothic-900 rounded-lg p-8 text-center">
          <h2 className="font-cinzel text-2xl mb-4">Need Help Finding Your Size?</h2>
          <p className="text-gothic-300 mb-6 max-w-2xl mx-auto">
            Our customer service team is available to help you find the perfect fit. Contact us with your measurements and the items you're interested in.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-gothic-950 px-6 py-3 rounded hover:bg-gothic-300 transition"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="inline-block border border-white px-6 py-3 rounded hover:bg-gothic-800 transition"
            >
              View FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide; 