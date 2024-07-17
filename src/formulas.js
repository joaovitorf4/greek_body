// formulas.js

export const calculateMaxWeight = (height) => {
    return height - 100;
};

export const calculateArmsCalves = (wristSize) => {
    return wristSize * 2.5;
};

export const calculateChest = (wristSize) => {
    return wristSize * 6.5;
};

export const calculateLegs = (kneeSize) => {
    return kneeSize * 1.75;
};

export const calculateShoulder = (waistSize) => {
    return (waistSize * 1.618).toFixed(2);
};

export const calculateFFMI = (weight, height, bodyFatPercentage) => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const fatFreeMass = weight * (1 - bodyFatPercentage / 100);
    const ffmi = fatFreeMass / (heightInMeters ** 2);
    return ffmi;
};

export const calculateFFMINormalized = (weight, height, bodyFatPercentage) => {
    const ffmi = calculateFFMI(weight, height, bodyFatPercentage);
    const heightInMeters = height / 100; // Convert height from cm to meters
    const ffmiNormalized = ffmi + 6.1 * (1.8 - heightInMeters);
    return ffmiNormalized;
};
