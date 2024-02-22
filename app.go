package main

import (
	"changeme/http_handling"
	"context"
	"io"
	"net/http"
	"time"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) Query(url string) http_handling.Response {
	resp, err := http.Get(url)
	if err != nil {
		return http_handling.Response{
			Code: resp.StatusCode,
			Body: "",
			Err:  err,
			Time: time.Second,
		}
	}

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	return http_handling.Response{
		Code: resp.StatusCode,
		Body: string(body[:]),
		Err:  err,
		Time: time.Second,
	}
}
