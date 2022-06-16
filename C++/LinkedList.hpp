#ifndef LinkedList_hpp
#define LinkedList_hpp

#include <stdio.h>
#include <iostream>
#include "Node.hpp"
#include "Structure.hpp"

using namespace std;

namespace DataStructures {
template<typename T> class LinkedList: protected Structure<T> {
    Node<T>* head;
    Node<T>* tail;
    int length;
    
    Node<T>* findNode(int index,Node<T>* ptr);
public:
    LinkedList<T>();
    ~LinkedList<T>();
protected:
    T get(int index) override;
    T pull(int index) override;
    void insert(int index,T value) override;
    int getLength() override;
    void push(T value);
    T pop();
    void unshift(T value);
    T shift();
};

template<typename T> LinkedList<T>::LinkedList(){
    head = tail = NULL;
    length = 0;
}
template<typename T> LinkedList<T>::~LinkedList(){
    Node<T>* ptr = head;
    
    while (ptr && ptr->next) {
        ptr = ptr->next;
        delete ptr->prev;
    }
    
    delete ptr;
}
template<typename T> T LinkedList<T>::pop(){
    return pull(length-1);
}
template<typename T> T LinkedList<T>::shift(){
    return pull(0);
}
template<typename T> void LinkedList<T>::push(T value){
    insert(length,value);
}
template<typename T> void LinkedList<T>::unshift(T value){
    insert(0,value);
}
template<typename T> T LinkedList<T>::get(int index){
    if(!getLength()) throw "List is empty";
    if(index < 0 || index >= length){
        throw "Index is out of bounds";
    }
    
    Node<T>* ptr = findNode(index,ptr = NULL);
    return ptr->value;
}
template<typename T> T LinkedList<T>::pull(int index){
    if(!getLength()) throw "List is empty";
    if(index < 0 || index >= length){
        throw "Index is out of bounds";
    }
    
    Node<T> *node = findNode(index,node = NULL);
    length--;
    
    T value = node->value;
    
    if(!node->prev && !node->next){
        head = tail = NULL;
    }else if (!node->prev){
        node->next->prev = NULL;
        head = node->next;
    }else if (!node->next){
        node->prev->next = NULL;
        tail = node->prev;
    }else{
        node->prev->next = node->next;
        node->next->prev = node->prev;
    }
    delete node;

    return value;
}
template<typename T> void LinkedList<T>::insert(int index, T value){
    if(index < 0 || index > length){
        throw "Index is out of bounds";
    }
    
    Node<T> *node = new Node<T>, *draft;
    node->value = value;
        
    length++;
    if(!head){
        head = tail = node;
        return;
    }
    if(!index){
        node->next = head;
        head->prev = node;
        head = node;
        return;
    }
    if(index == length - 1){
        node->prev = tail;
        tail->next = node;
        tail = node;
        return;
    }
    draft = findNode(index,draft = NULL);
    
    node->prev = draft->prev;
    draft->prev->next = node;
    node->next = draft;
    draft->prev = node;
}
template<typename T> int LinkedList<T>::getLength(){
    return length;
}
template<typename T> Node<T>* LinkedList<T>::findNode(int index, Node<T> *ptr){
    if(index + 1 >= (int)ceil(length / 2.0)){
        ptr = tail;
        for(int i = 0; i < length - 1 - index; i++){
            ptr = ptr->prev;
        }
    }else{
        ptr = head;
        for(int i = 0; i < index; i++){
            ptr = ptr->next;
        }
    }
    
    return ptr;
}
};
#endif
