class Territory < ApplicationRecord

    #Territories need to have tropps,
    #A Player has many Troops per territory

    has_many :Troops


end