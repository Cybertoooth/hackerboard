require 'sinatra'
require 'securerandom'

class HackerboardApp < Sinatra::Base

  get '/' do
    erb :rankings
  end

  get '/rankings' do
    erb :rankings
  end

  get '/join' do
    erb :join
  end

  post '/join' do
    @country = params[:country]
    @handle = params[:handle]
    @language = params[:'programming-language']
    @hacker_id = SecureRandom.hex(12)
    if @handle.empty? || @country.empty? || @language.empty?
      erb :join
    else
      redirect '/avatar'
    end
  end

  get '/avatar' do
    erb :avatar
  end

 get '/challenge/:id/solved' do
   erb :solved
 end

 get '/challenge/:id' do
   erb :challenge
 end

 get '/challenges' do
    erb :challenges
 end




 run!
end
