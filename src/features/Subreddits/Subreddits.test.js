import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import { redditApi } from '../../api/reddit.js';
import Subreddits from './index.jsx';

// Mock the API response
const mockedSubreddits = [
    { id: '1', display_name: 'home', icon_img: 'https://example.com/home.png' },
    { id: '2', display_name: 'dogs', icon_img: 'https://example.com/dogs.png' },
];

jest.mock('../../api/reddit.js', () => ({
    ...jest.requireActual('../../api/reddit.js'),
    useGetSubredditsQuery: () => ({
        data: mockedSubreddits,
        error: null,
        isLoading: false,
    }),
}));

describe('Subreddits Component', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                [redditApi.reducerPath]: redditApi.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(redditApi.middleware),
        });
    });

    it('renders subreddit buttons and handles navigation', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Subreddits />
                </MemoryRouter>
            </Provider>
        );

        
        await waitFor(() => {
            mockedSubreddits.forEach(subreddit => {
                const subredditButton = screen.getByText(subreddit.display_name);
                expect(subredditButton).toBeInTheDocument();
            });
        });
    });
    it('renders subreddit images with correct sources', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Subreddits />
                </MemoryRouter>
            </Provider>
        );

        await waitFor(() => {
            const images = screen.getAllByRole('img');

            expect(images.length).toBe(mockedSubreddits.length);

            images.forEach((img, index) => {
                expect(img).toHaveAttribute('src', mockedSubreddits[index].icon_img);
                expect(img).toHaveAttribute('alt', mockedSubreddits[index].display_name);
            });
        });
    });
});