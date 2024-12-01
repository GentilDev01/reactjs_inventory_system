import React, { useState, useEffect } from 'react';
import axios from 'axios';

const People = () => {
    const [people, setPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=10');
            setPeople(response.data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching people:', error);
            setLoading(false);
        }
    };

    const filteredPeople = people.filter(person =>
        person.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.name.last.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.location.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="h-full bg-gray-100px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 mt-20">
                    <input
                        type="text"
                        placeholder="Search by name or country..."
                        className="w-full max-w-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPeople.map((person, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={person.picture.large}
                                        alt={`${person.name.first} ${person.name.last}`}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                        <h3 className="text-white text-xl font-semibold">
                                            {person.name.first} {person.name.last}
                                        </h3>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-gray-600">
                                        <span className="font-medium">Location:</span> {person.location.city}, {person.location.country}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Email:</span> {person.email}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Phone:</span> {person.phone}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default People;