module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()};
					最大值 = ${sequence.maxmum()};
	                元素数量 = ${sequence.total()};
					平均值 = ${sequence.average()};
	`);
};

class Sequence {
  constructor(input) {
    this.input=input;
  }

  minimum() {
    var array=this.input;
	var min= array[0];
	for(var i = 1; i < array.length-1; i++){
		if(min > array[i])
			min=array[i];
	} 
	return min;
  }
	
	maxmum(){
		var array=this.input;
		var max= array[0];
		for(var i = 1; i < array.length-1; i++){
			if(max < array[i])
				max=array[i];
		} 
		return max;
	}

	total(){
		return this.input.length;
	}

	average(){
		var array=this.input;
		var sum= 0;
		var avg = 0;
		for(var i = 0; i < array.length-1; i++){
			sum+=array[i];
		} 
		avg = sum/array.length;
		return avg;
	}
}
