import { defineConfig } from 'vitest/config';
export default defineConfig({
    test:{
        maxConcurrency:1,
        allowOnly:true
    }
})