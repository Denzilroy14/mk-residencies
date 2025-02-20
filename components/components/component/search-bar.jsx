import { useState } from "react";
// Assuming these components are correctly imported
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectItem,
    SelectContent
} from "@components/components/ui/select";
import { Input } from "@components/components/ui/input";
import { Button } from "@components/Button";
import styles from "./search-bar.module.css"; // Import the CSS module

function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

export function SearchBar() {
    const [selectedProperty, setSelectedProperty] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Debug logs to ensure values are captured
        console.log("Handling form submission");
        const formData = {
            property: selectedProperty,
            checkIn: checkInDate,
            checkOut: checkOutDate
        };
        console.log("Form Data:", formData);

        // Here you would typically send the formData to your backend API
        // with a fetch call or some other method
    };

    return (
        <form
            name="booking"
            onSubmit={handleSubmit}
            className={`${styles.searchBarForm} max-w-7xl mx-auto p-6 flex items-end justify-between rounded-lg shadow-md`}
            style={{ backgroundColor: "orange" }}
        >
            <div className={`${styles.formGroup} flex-grow mr-4`}>
                <label
                    htmlFor="property-name"
                    className="block mb-1 text-sm font-medium text-gray-700"
                >
                    Select property
                </label>
                <Select
                    className="w-full"
                    value={selectedProperty}
                    onValueChange={setSelectedProperty}
                >
                    <SelectTrigger id="property-name">
                        <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="tea-harbour">
                            Tea Harbour, AET circle, near to EcoWorld, EcoSpace,
                            Embassy Tech Park, Bangalore
                        </SelectItem>
                        <SelectItem value="tea-square" className="select-value">
                            Tea Square, Green Glen Layout, close to Prestige
                            Ferns galaxy, Salarpuria SoftZone, Vaishnavi
                            Signature, Bangalore
                        </SelectItem>
                        <SelectItem value="tea-pavillion">
                            Tea Pavillion, Kormangala, close to StarTech Park,
                            Bangalore
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className={`${styles.formGroup} mr-4`}>
                <label
                    htmlFor="check-in"
                    className="block mb-1 text-sm font-medium text-gray-700"
                >
                    Check-in date
                </label>
                <Input
                    id="check-in"
                    type="date"
                    className="w-full"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                />
            </div>
            <div className={`${styles.formGroup} mr-4`}>
                <label
                    htmlFor="check-out"
                    className="block mb-1 text-sm font-medium text-gray-700"
                >
                    Check-out date
                </label>
                <Input
                    id="check-out"
                    type="date"
                    className="w-full"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                />
            </div>
            <Button
                type="submit"
                className={`${styles.submitButton} bg-transparent-500 text-black px-6 py-3 rounded-lg flex items-center`}
            >
                <SearchIcon />
                Search
            </Button>
        </form>
    );
}
