#ifndef Vector_hpp
#define Vector_hpp

#include <stdio.h>
#include "Structure.hpp"

namespace DataStructures {
template<typename T> class Vector: protected Structure<T> {
    T* vector;
    int length;
public:
    Vector<T>();
    ~Vector<T>();
    
    T get(int index) override;
    T pull(int index) override;
    void insert(int index,T value) override;
    int getLength() override;
};
template<typename T> Vector<T>::Vector(){
    vector = NULL;
    length = 0;
}
template<typename T> Vector<T>::~Vector(){
    if(vector){
        delete[] vector;
        vector = NULL;
    };
}
template<typename T> T Vector<T>::get(int index){
    if(!vector) throw "Vector is empty";
    if(index < 0 || index >= length){
        throw "Index is out of bounds";
    }
    
    return vector[index];
}
template<typename T> T Vector<T>::pull(int index){
    if(!vector) throw "Vector is empty";
    if(index < 0 || index >= length){
        throw "Index is out of bounds";
    }
    
    T value = vector[index];
    if(length == 1){
        length = 0;
        delete[] vector;
        vector = NULL;
        return value;
    }
    T* newVector = new T[--length];
    
    int i = 0;
    for(; i < index; i++){
        newVector[i] = vector[i];
    }
    for(i = index; i < length; i++){
        newVector[i] = vector[i+1];
    }
    
    delete[] vector;
    vector = newVector;
    
    return value;
}
template<typename T> void Vector<T>::insert(int index, T value){
    if(index < 0 || index > length){
        throw "Index is out of bounds";
    }
    
    if(!length){
        length++;
        vector = new T[length];
        vector[index] = value;
        return;
    }
    
    T* newVector = new T[++length];
    newVector[index] = value;
    
    int i = 0;
    for(; i < index; i++){
        newVector[i] = vector[i];
    }
    for(i = index; i < length-1; i++){
        newVector[i+1] = vector[i];
    }
    
    delete[] vector;
    vector = newVector;
}
template<typename T> int Vector<T>::getLength(){
    return length;
}
};
#endif
