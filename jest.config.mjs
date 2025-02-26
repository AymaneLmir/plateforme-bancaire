import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './', // Répertoire racine de ton projet
});

const customJestConfig = {
  // Configuration personnalisée
};

export default createJestConfig(customJestConfig);
