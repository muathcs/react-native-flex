/**
 * INTERVIEW CHALLENGE: Interactive Global Customer Map
 *
 * Build a data visualization dashboard that:
 * 1. Displays customers on a world map with their locations
 * 2. Scales marker size based on customer revenue
 * 3. Shows customer details on hover
 * 4. Displays connection lines from origin to customer locations
 * 5. Shows aggregate statistics (total revenue, transactions)
 *
 * Requirements:
 * - Use geographic coordinates for positioning
 * - Implement responsive tooltips
 * - Scale visualization elements based on data
 * - Handle mock data if no real data is provided
 * - Create an appealing, futuristic UI design
 */

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { Tooltip } from "react-tooltip";

// Add type declarations for the modules without TypeScript definitions
declare module "react-simple-maps";
declare module "d3-scale";

// World map topojson data
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

interface Customer {
  id: string;
  name: string;
  location: [number, number]; // [longitude, latitude]
  revenue: number;
  transactions: number;
}

interface FanMapProps {
  customers?: Customer[];
  title?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

function FanMap({
  customers = [],
  title = "Global Customer Network",
  primaryColor = "#4F46E5",
  secondaryColor = "#10B981",
}: FanMapProps) {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [mockCustomers, setMockCustomers] = useState<Customer[]>([]);

  // Generate mock data if no customers are provided
  useEffect(() => {
    if (customers.length === 0) {
      const mockData: Customer[] = [
        {
          id: "1",
          name: "Acme Corp",
          location: [-74.006, 40.7128],
          revenue: 1250000,
          transactions: 342,
        },
        {
          id: "2",
          name: "TechGiant",
          location: [-122.4194, 37.7749],
          revenue: 2100000,
          transactions: 512,
        },
        {
          id: "3",
          name: "EuroSystems",
          location: [2.3522, 48.8566],
          revenue: 980000,
          transactions: 215,
        },
        {
          id: "4",
          name: "Asia Solutions",
          location: [139.6917, 35.6895],
          revenue: 1750000,
          transactions: 421,
        },
        {
          id: "5",
          name: "Dubai Ventures",
          location: [55.2708, 25.2048],
          revenue: 1320000,
          transactions: 187,
        },
        {
          id: "6",
          name: "Sydney Innovations",
          location: [151.2093, -33.8688],
          revenue: 890000,
          transactions: 203,
        },
        {
          id: "7",
          name: "Cape Town Partners",
          location: [18.4241, -33.9249],
          revenue: 650000,
          transactions: 156,
        },
        {
          id: "8",
          name: "Rio Enterprises",
          location: [-43.1729, -22.9068],
          revenue: 720000,
          transactions: 178,
        },
      ];
      setMockCustomers(mockData);
    }
  }, [customers]);

  const displayCustomers = customers.length > 0 ? customers : mockCustomers;

  // Scale for marker size based on revenue
  const maxRevenue = Math.max(...displayCustomers.map((c) => c.revenue), 1);
  const sizeScale = scaleLinear().domain([0, maxRevenue]).range([5, 20]);

  // Calculate total revenue for display
  const totalRevenue = displayCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const totalTransactions = displayCustomers.reduce(
    (sum, c) => sum + c.transactions,
    0
  );

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        {title}
      </h2>

      <div className="relative h-[70vh] border border-gray-800 rounded-lg overflow-hidden bg-gray-950">
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(25,_25,_35,_0.2)_1px,_transparent_1px)] bg-[length:24px_24px] pointer-events-none"></div>

        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 200,
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo: any) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#334155", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Connection lines */}
            {displayCustomers.map((customer, i) => (
              <line
                key={`line-${customer.id}`}
                x1={0}
                y1={0}
                x2={customer.location[0]}
                y2={customer.location[1]}
                stroke={`url(#lineGradient-${i})`}
                strokeWidth={1.5}
                strokeDasharray="5,5"
                strokeOpacity={0.7}
                className="animate-pulse"
              />
            ))}

            {/* Gradient definitions for lines */}
            <defs>
              {displayCustomers.map((customer, i) => (
                <linearGradient
                  key={`gradient-${i}`}
                  id={`lineGradient-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={primaryColor}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="100%"
                    stopColor={secondaryColor}
                    stopOpacity={0.8}
                  />
                </linearGradient>
              ))}
            </defs>

            {/* Customer markers */}
            {displayCustomers.map((customer) => (
              <Marker
                key={customer.id}
                coordinates={customer.location}
                data-tooltip-id="customer-tooltip"
                data-tooltip-content={`${
                  customer.name
                } - $${customer.revenue.toLocaleString()}`}
                onMouseEnter={() => setSelectedCustomer(customer)}
                onMouseLeave={() => setSelectedCustomer(null)}
              >
                <circle
                  r={sizeScale(customer.revenue)}
                  fill={primaryColor}
                  fillOpacity={0.8}
                  stroke={secondaryColor}
                  strokeWidth={2}
                  className="cursor-pointer hover:fill-opacity-1 transition-all duration-300"
                />
                <circle
                  r={sizeScale(customer.revenue) * 1.5}
                  fill="transparent"
                  stroke={primaryColor}
                  strokeWidth={1}
                  strokeOpacity={0.3}
                  className="animate-ping-slow"
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {/* Futuristic HUD elements */}
        <div className="absolute top-4 right-4 bg-gray-900/70 backdrop-blur-sm p-3 rounded-lg border border-gray-700 text-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span>Network Active</span>
          </div>
          <div>Customers: {displayCustomers.length}</div>
          <div>Total Revenue: ${totalRevenue.toLocaleString()}</div>
          <div>Total Transactions: {totalTransactions.toLocaleString()}</div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-gray-900/70 backdrop-blur-sm p-3 rounded-lg border border-gray-700 text-xs">
          <div className="flex items-center gap-2 mb-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <span>Customer Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-gray-400 stroke-dasharray-2"></div>
            <span>Connection</span>
          </div>
          <div className="mt-1 text-gray-400">
            <span>Circle size represents revenue</span>
          </div>
        </div>
      </div>

      {/* Customer tooltip */}
      <Tooltip id="customer-tooltip" className="z-50" />

      {/* Customer details panel */}
      {selectedCustomer && (
        <div className="absolute right-8 top-1/4 w-64 bg-gray-900/90 backdrop-blur-md p-4 rounded-lg border border-gray-700 shadow-xl">
          <h3 className="font-bold text-lg mb-2">{selectedCustomer.name}</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Revenue:</span>
              <span className="font-mono">
                ${selectedCustomer.revenue.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Transactions:</span>
              <span className="font-mono">{selectedCustomer.transactions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Location:</span>
              <span className="font-mono truncate">
                {selectedCustomer.location[1].toFixed(2)},{" "}
                {selectedCustomer.location[0].toFixed(2)}
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-gray-700">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg. Transaction:</span>
                <span className="font-mono">
                  $
                  {(
                    selectedCustomer.revenue / selectedCustomer.transactions
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s infinite;
        }
        `}
      </style>
    </div>
  );
}

export default FanMap;
